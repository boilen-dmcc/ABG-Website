import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { CareersData } from "./types";

type Props = { data: CareersData };

const ALL_FILTER = "ALL";

export const OpenRoles = ({ data }: Props) => {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filters = useMemo(
    () => [ALL_FILTER, ...data.teams.map((t) => t.label)],
    [data.teams],
  );

  const labelToName = useMemo(() => {
    const map = new Map<string, string>();
    for (const t of data.teams) map.set(t.label, t.name);
    return map;
  }, [data.teams]);

  const filteredRoles = useMemo(() => {
    if (activeFilter === ALL_FILTER) return data.roles;
    const teamName = labelToName.get(activeFilter);
    if (!teamName) return data.roles;
    return data.roles.filter((r) => r.team === teamName);
  }, [activeFilter, data.roles, labelToName]);

  const handleFilter = (filter: string) => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);
    setExpandedSlug(null);
  };

  const toggleRole = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      id="roles"
      className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.rolesEyebrow}
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-[20ch]">
              {data.rolesHeading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="max-w-[46ch] text-base lg:text-lg text-[#1a1a1a]/70 leading-relaxed">
              {data.rolesIntro}
            </p>
          </div>
        </div>

        <div className="mb-10 lg:mb-14 -mx-4 sm:mx-0 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-0 px-4 sm:px-0 min-w-max sm:min-w-0 sm:flex-wrap">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <li key={f} className="-ml-px first:ml-0">
                  <button
                    type="button"
                    onClick={() => handleFilter(f)}
                    aria-pressed={isActive}
                    className={`font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.22em] px-4 lg:px-5 py-2.5 lg:py-3 border transition-colors duration-200 motion-reduce:transition-none ${
                      isActive
                        ? "bg-red-600 border-red-600 text-white"
                        : "bg-white border-[#1a1a1a]/20 text-[#1a1a1a]/70 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                    }`}
                  >
                    {f}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t-2 border-[#1a1a1a]">
          {filteredRoles.length === 0 ? (
            <div className="py-16 lg:py-20 text-center">
              <p className="font-necto_mono text-xs lg:text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/50">
                No open roles in this team.
              </p>
            </div>
          ) : (
            filteredRoles.map((role) => {
              const isOpen = expandedSlug === role.slug;
              const subject = encodeURIComponent(
                `Application · ${role.title}`,
              );
              const mailto = `mailto:${data.contact.email}?subject=${subject}`;
              return (
                <div
                  key={role.slug}
                  className="border-b border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleRole(role.slug)}
                    aria-expanded={isOpen}
                    className="w-full grid grid-cols-[1fr_auto] items-center gap-6 py-7 lg:py-9 text-left group focus:outline-none"
                  >
                    <div>
                      <h3 className="font-apfel_grotezk font-semibold text-2xl lg:text-3xl leading-tight tracking-tight">
                        {role.title}
                      </h3>
                      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                        <span className="text-red-600">{role.team}</span>
                        <span className="text-[#1a1a1a]/25">·</span>
                        <span>{role.location}</span>
                        <span className="text-[#1a1a1a]/25">·</span>
                        <span>{role.type}</span>
                      </p>
                    </div>
                    <span
                      className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full border flex items-center justify-center transition-all duration-500 motion-reduce:transition-none ${
                        isOpen
                          ? "bg-red-600 border-red-600 rotate-180"
                          : "border-gray-300 group-hover:border-[#1a1a1a]"
                      }`}
                      aria-hidden
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-colors duration-500 motion-reduce:transition-none ${
                          isOpen ? "text-white" : "text-[#1a1a1a]"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-10 lg:pb-14">
                        <p className="text-base lg:text-lg text-[#1a1a1a]/75 leading-relaxed max-w-[60ch] mb-8 lg:mb-10">
                          {role.summary}
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                          <div>
                            <p className="font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.22em] text-red-600 mb-4">
                              RESPONSIBILITIES
                            </p>
                            <ul className="space-y-3">
                              {role.responsibilities.map((r, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm lg:text-base text-[#1a1a1a]/80 leading-relaxed"
                                >
                                  <span
                                    className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"
                                    aria-hidden
                                  />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.22em] text-red-600 mb-4">
                              REQUIREMENTS
                            </p>
                            <ul className="space-y-3">
                              {role.requirements.map((r, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm lg:text-base text-[#1a1a1a]/80 leading-relaxed"
                                >
                                  <span
                                    className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"
                                    aria-hidden
                                  />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-10 lg:mt-12">
                          <a
                            href={mailto}
                            className="group inline-flex items-center gap-4"
                          >
                            <span className="flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
                              <ArrowRight className="w-5 h-5" />
                            </span>
                            <span className="text-base lg:text-lg font-semibold">
                              Apply for this role
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
