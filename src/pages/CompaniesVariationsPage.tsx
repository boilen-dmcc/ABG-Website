import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Shared Data
const companies = [
  {
    id: 1,
    name: "TAQAT KIRKUK",
    category: "Energy",
    description: "Refinery-adjacent gasoline production.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=800&fit=crop"
  },
  {
    id: 2,
    name: "Northern Covenant",
    category: "Services",
    description: "Oilfield services and operational support.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop"
  },
  {
    id: 3,
    name: "Bryar Transport",
    category: "Logistics",
    description: "Oil logistics and product marketing.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop"
  },
  {
    id: 4,
    name: "Barham Black Gold",
    category: "Materials",
    description: "Asphalt and bitumen production.",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1200&h=800&fit=crop"
  },
  {
    id: 5,
    name: "Rahand Company",
    category: "Construction",
    description: "Concrete blocks and building materials.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=800&fit=crop"
  },
  {
    id: 6,
    name: "Gashbin GmbH",
    category: "Investment",
    description: "Real estate investment in EU markets.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop"
  },
  {
    id: 7,
    name: "Al Barham DMCC",
    category: "Holding",
    description: "Group investment and strategic portfolio.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
  },
  {
    id: 8,
    name: "Binaa Al Sahraa",
    category: "Contracting",
    description: "General contracting and industrial trading.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=800&fit=crop"
  }
];

// ==========================================
// VARIATION 1: The Index (Minimal List)
// ==========================================
const Variation1 = () => {
  const [hoveredId, setHoveredId] = useState<number>(1);
  const activeCompany = companies.find(c => c.id === hoveredId) || companies[0];

  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Left: List */}
      <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center">
        <div className="mb-12">
          <span className="text-red-600 font-necto_mono text-xs tracking-widest uppercase mb-2 block">Variation 01</span>
          <h2 className="text-4xl font-apfel_grotezk font-bold text-gray-900">The Index</h2>
          <p className="text-gray-500 mt-4 max-w-md">
            A minimalist approach focusing on typography. Hover over the names to reveal details.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          {companies.map((company) => (
            <div 
              key={company.id}
              onMouseEnter={() => setHoveredId(company.id)}
              className="group cursor-pointer py-4 border-b border-gray-100 flex items-center justify-between transition-all hover:pl-4"
            >
              <h3 className={`text-2xl lg:text-3xl font-apfel_grotezk transition-colors ${hoveredId === company.id ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-900'}`}>
                {company.name}
              </h3>
              <span className={`text-xs font-necto_mono uppercase tracking-wider transition-opacity ${hoveredId === company.id ? 'opacity-100 text-red-600' : 'opacity-0'}`}>
                {company.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image Preview */}
      <div className="hidden lg:block w-1/2 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
           <img 
             key={activeCompany.id}
             src={activeCompany.image} 
             alt={activeCompany.name}
             className="w-full h-full object-cover animate-fade-in"
             style={{ animation: 'fadeIn 0.5s ease-out' }}
           />
           <div className="absolute inset-0 bg-black/20" />
           <div className="absolute bottom-0 left-0 p-12 text-white">
             <p className="text-lg font-medium max-w-md leading-relaxed">{activeCompany.description}</p>
             <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-red-400 transition-colors cursor-pointer">
               View Profile <ArrowRight className="w-4 h-4" />
             </div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

// ==========================================
// VARIATION 2: The Collective (Clean Grid)
// ==========================================
const Variation2 = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-red-600 font-necto_mono text-xs tracking-widest uppercase mb-2 block">Variation 02</span>
          <h2 className="text-4xl md:text-5xl font-apfel_grotezk font-bold text-gray-900">The Collective</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A clean, card-based grid layout that balances imagery and information. Ideal for quick scanning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-necto_mono text-red-600 uppercase tracking-wider mb-2 block">{company.category}</span>
                <h3 className="text-xl font-apfel_grotezk font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{company.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// VARIATION 3: Focus View (Horizontal Slider)
// ==========================================
const Variation3 = () => {
  const [activeId, setActiveId] = useState(1);
  
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col justify-center py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full px-4 lg:px-12">
        <div className="mb-12">
          <span className="text-red-500 font-necto_mono text-xs tracking-widest uppercase mb-2 block">Variation 03</span>
          <h2 className="text-4xl md:text-5xl font-apfel_grotezk font-bold text-white">Focus View</h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            An immersive horizontal slider that highlights one company at a time while keeping others accessible.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x px-4 lg:px-0">
          {companies.map((company) => {
            const isActive = activeId === company.id;
            return (
              <div 
                key={company.id}
                onClick={() => setActiveId(company.id)}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out snap-center ${
                  isActive ? 'w-[300px] md:w-[600px]' : 'w-[200px] md:w-[300px] opacity-60 hover:opacity-80'
                } h-[400px] md:h-[500px]`}
              >
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className={`inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-3 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {company.category}
                  </span>
                  <h3 className={`font-apfel_grotezk font-bold text-white transition-all duration-300 ${isActive ? 'text-3xl md:text-4xl mb-2' : 'text-xl'}`}>
                    {company.name}
                  </h3>
                  <p className={`text-gray-300 text-sm md:text-base max-w-md transition-all duration-500 ${isActive ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    {company.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const CompaniesVariationsPage = () => {
  const [selectedVariation, setSelectedVariation] = useState(1);

  const variations = [
    { id: 1, name: "The Index", component: <Variation1 /> },
    { id: 2, name: "The Collective", component: <Variation2 /> },
    { id: 3, name: "Focus View", component: <Variation3 /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold font-apfel_grotezk text-gray-900">Companies Variations 2.0</h1>
              <a 
                href="./?page=albarham" 
                className="text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors"
              >
                ← Back to Home
              </a>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {variations.map((variation) => (
                <button
                  key={variation.id}
                  onClick={() => setSelectedVariation(variation.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedVariation === variation.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {variation.id}. {variation.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {variations.find(v => v.id === selectedVariation)?.component}
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Select a variation above to preview different layouts.
          </p>
        </div>
      </div>
    </div>
  );
};
