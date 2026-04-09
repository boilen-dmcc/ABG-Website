import React from 'react';
import { ArrowRight } from 'lucide-react';

const companies = [
  { 
    id: 1, 
    name: 'TAQAT KIRKUK', 
    tagline: 'Gasoline Production', 
    description: 'Leading downstream operations with refinery-adjacent gasoline production facilities.',
    category: 'Energy & Downstream',
    color: '#DC2626', 
    icon: '⚡',
  },
  { 
    id: 2, 
    name: 'Northern Covenant', 
    tagline: 'Oil Services', 
    description: 'Providing comprehensive oilfield services and technical operational support.',
    category: 'Energy Services',
    color: '#EA580C', 
    icon: '🛢️',
  },
  { 
    id: 3, 
    name: 'Bryar Transport', 
    tagline: 'Logistics & Marketing', 
    description: 'Specialized oil logistics, land transport, and petroleum product marketing.',
    category: 'Logistics',
    color: '#D97706', 
    icon: '🚛',
  },
  { 
    id: 4, 
    name: 'Barham Black Gold', 
    tagline: 'Asphalt Production', 
    description: 'High-quality asphalt and bitumen production for major infrastructure projects.',
    category: 'Construction Materials',
    color: '#65A30D', 
    icon: '🛣️',
  },
  { 
    id: 5, 
    name: 'Rahand Company', 
    tagline: 'Concrete Blocks', 
    description: 'Manufacturing technical concrete blocks and essential building materials.',
    category: 'Construction Materials',
    color: '#059669', 
    icon: '🧱',
  },
  { 
    id: 6, 
    name: 'Binaa Al Sahraa', 
    tagline: 'General Contracting', 
    description: 'General contracting services and trading of industrial construction materials.',
    category: 'Contracting',
    color: '#0891B2', 
    icon: '🏗️',
  },
  { 
    id: 7, 
    name: 'Gashbin GmbH', 
    tagline: 'Real Estate Investment', 
    description: 'Strategic real estate and property investment focused on EU markets.',
    category: 'Real Estate',
    color: '#0284C7', 
    icon: '🏢',
  },
  { 
    id: 8, 
    name: 'Al Barham DMCC', 
    tagline: 'Investment Holding', 
    description: 'The group investment vehicle managing financial and strategic portfolios.',
    category: 'Investment',
    color: '#7C3AED', 
    icon: '💼',
  },
];

export const Page2Companies = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.jsdelivr.net/gh/SaintFredMax/abg-assets@main/ABG%20Company%20Sections%20Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Text */}
          <div className="text-white space-y-6">
            <span className="block text-sm font-medium uppercase tracking-widest opacity-80 font-necto_mono">
              Our Companies
            </span>
            <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
              A diverse group providing regional energy, construction, and investment solutions.
            </p>
          </div>

          {/* Right Column: Single Column Glassmorphism List with Hover Expand */}
          <div className="flex flex-col gap-2 w-[260px] ml-auto">
            {companies.map((company) => (
              <a 
                key={company.id}
                href="#" 
                className="group relative flex flex-col px-5 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-1000 ease-out overflow-hidden"
              >
                {/* Main Row */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-semibold text-white group-hover:text-red-400 transition-colors duration-1000">{company.name}</h3>
                    <p className="text-xs text-white/60 group-hover:text-white/90 transition-colors duration-1000">{company.tagline}</p>
                  </div>
                </div>
                
                {/* Expandable Content - Hidden by default, shows on hover */}
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
