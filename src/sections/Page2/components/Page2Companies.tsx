import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type CompanyCard = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  category: string;
  color: string;
  icon: string;
  url?: string;
};

const companies: CompanyCard[] = [
  {
    id: 1,
    name: 'TAQAT KIRKUK',
    tagline: 'Gasoline Production',
    description: 'Leading downstream operations with refinery-adjacent gasoline production facilities.',
    category: 'Energy & Downstream',
    color: '#DC2626',
    icon: '⚡',
    url: '/companies/taqat',
  },
  {
    id: 2,
    name: 'Northern Covenant',
    tagline: 'Oil Services',
    description: 'Providing comprehensive oilfield services and technical operational support.',
    category: 'Energy Services',
    color: '#EA580C',
    icon: '🛢️',
    url: '/companies/northern-covenant',
  },
  {
    id: 3,
    name: 'Bryar Transport',
    tagline: 'Logistics & Marketing',
    description: 'Specialized oil logistics, land transport, and petroleum product marketing.',
    category: 'Logistics',
    color: '#D97706',
    icon: '🚛',
    url: '/companies/bryar-transport',
  },
  {
    id: 4,
    name: 'Barham Black Gold',
    tagline: 'Asphalt Production',
    description: 'High-quality asphalt and bitumen production for major infrastructure projects.',
    category: 'Construction Materials',
    color: '#65A30D',
    icon: '🛣️',
    url: '/companies/barham-black-gold',
  },
  {
    id: 5,
    name: 'Rahand Company',
    tagline: 'Concrete Blocks',
    description: 'Manufacturing technical concrete blocks and essential building materials.',
    category: 'Construction Materials',
    color: '#059669',
    icon: '🧱',
    url: '/companies/rahand',
  },
  {
    id: 6,
    name: 'Binaa Al Sahraa',
    tagline: 'General Contracting',
    description: 'General contracting services and trading of industrial construction materials.',
    category: 'Contracting',
    color: '#0891B2',
    icon: '🏗️',
    url: '/companies/binaa-al-sahraa',
  },
  {
    id: 7,
    name: 'Gashbin GmbH',
    tagline: 'Real Estate Investment',
    description: 'Strategic real estate and property investment focused on EU markets.',
    category: 'Real Estate',
    color: '#0284C7',
    icon: '🏢',
    url: '/companies/gashbin',
  },
  {
    id: 8,
    name: 'Al Barham DMCC',
    tagline: 'Investment Holding',
    description: 'The group investment vehicle managing financial and strategic portfolios.',
    category: 'Investment',
    color: '#7C3AED',
    icon: '💼',
    url: '/companies/al-barham-dmcc',
  },
];

export const Page2Companies = () => {
  let companiesList = null;

  if (0) {
    companiesList = (
      <div className="flex flex-col gap-2 w-[260px] ml-auto">
        {companies.map((company) => {
          const cardClass =
            "group relative flex flex-col px-5 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-1000 ease-out overflow-hidden";
          const inner = (
            <>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-semibold text-white group-hover:text-red-400 transition-colors duration-1000">{company.name}</h3>
                  <p className="text-xs text-white/60 group-hover:text-white/90 transition-colors duration-1000">{company.tagline}</p>
                </div>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-1000 ease-out">
                <div className="overflow-hidden">
                  <div className="pt-3 pb-1 flex flex-col gap-2">
                    <p className="text-sm text-white/70 leading-relaxed">{company.description}</p>
                    <span className="flex items-center gap-2 text-sm font-medium text-red-400 group-hover:gap-3 transition-all duration-1000">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
          return company.url ? (
            <Link key={company.id} to={company.url} className={cardClass}>
              {inner}
            </Link>
          ) : (
            <a key={company.id} href="#" className={cardClass}>
              {inner}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#121e37]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/company.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#121e37]/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 min-h-screen flex items-center justify-center">
        <div className="w-full">
          {/* Heading */}
          <div className="text-white text-center max-w-4xl mx-auto">
            <p
              className="text-3xl md:text-5xl font-bold uppercase text-white"
              style={{ lineHeight: 1.3 }}
            >
              A diverse group providing regional energy, construction, and{" "}
              <span className="bg-red-600 text-white px-1.5 py-0.2">investment solutions.</span>
            </p>
          </div>

          {/* Right Column: Single Column Glassmorphism List with Hover Expand */}
          {companiesList}
        </div>
      </div>
    </section>
  );
};
