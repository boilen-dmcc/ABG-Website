import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const OpenRoles = ({ data }: Props) => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleRole = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      id="roles"
      className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.rolesEyebrow}
            </p>
            <h2 className="heading-section leading-[1.05] max-w-[20ch]">
              {data.rolesHeading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="max-w-[46ch] text-base lg:text-lg text-foreground/70 leading-relaxed">
              {data.rolesIntro}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-[#1a1a1a]">
          {data.roles.map((role) => {
            const isOpen = expandedSlug === role.slug;
            const subject = encodeURIComponent(`Application · ${role.title}`);
            const mailto = `mailto:${data.contact.email}?subject=${subject}`;

            return (
              <div key={role.slug} className="border-b border-gray-200">
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
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/55">
                      <span className="text-red-600">{role.team}</span>
                      <span className="text-foreground/25">·</span>
                      <span>{role.location}</span>
                      <span className="text-foreground/25">·</span>
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
                        isOpen ? "text-white" : "text-foreground"
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
                      <p className="text-base lg:text-lg text-foreground/75 leading-relaxed max-w-[60ch] mb-8 lg:mb-10">
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
                                className="flex items-start gap-3 text-sm lg:text-base text-foreground/80 leading-relaxed"
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
                                className="flex items-start gap-3 text-sm lg:text-base text-foreground/80 leading-relaxed"
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
                        <Button
                          href={mailto}
                          aria-label={`Apply for ${role.title}`}
                        >
                          Apply for this role
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
