import { useState } from "react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Engineering",
    subtitle: "ENGINEERING EXCELLENCE",
    description: "The Group delivers full-spectrum engineering services including FEED, detailed design, and technical studies. Our multidisciplinary teams ensure projects meet the highest standards of safety, efficiency, and regulatory compliance from concept through execution.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 2,
    number: "02",
    title: "Procurement",
    subtitle: "GLOBAL SOURCING",
    description: "Leveraging global vendor networks and strategic partnerships, we source equipment, materials, and services that meet project specifications while optimizing cost and delivery schedules. Our procurement expertise ensures quality and reliability across the supply chain.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 3,
    number: "03",
    title: "Construction",
    subtitle: "PRECISION EXECUTION",
    description: "From civil works to mechanical installation, our construction teams execute projects with precision and discipline. We manage commissioning and startup activities to ensure facilities operate safely and efficiently from day one.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 4,
    number: "04",
    title: "EPCC Solutions",
    subtitle: "INTEGRATED DELIVERY",
    description: "We provide integrated Engineering, Procurement, Construction, and Commissioning services under a single contract. This turnkey approach streamlines project delivery, reduces interfaces, and ensures accountability from design through handover.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 5,
    number: "05",
    title: "Oil & Gas",
    subtitle: "ENERGY SOLUTIONS",
    description: "Our portfolio includes upstream exploration support, midstream processing, downstream refining, and petroleum product marketing. We deliver technical and operational excellence across the entire oil and gas value chain.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    id: 6,
    number: "06",
    title: "Transportation",
    subtitle: "SUPPLY CHAIN EXCELLENCE",
    description: "Specialized in petroleum product transportation, we operate modern fleets and logistics networks that ensure safe, timely delivery. Our services support both domestic distribution and regional export operations.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    link: "#"
  }
];

export const AlBarhamServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="box-border caret-transparent py-16 px-[18.75px] md:px-0">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          
          {/* Left Sidebar - Blue Box */}
          {/* Mobile: 100%, Tablet (md): 50%, Desktop (lg): 25% */}
          <div className="w-full md:w-1/2 lg:w-[25%] bg-[#2B7DE9] py-6 flex flex-col">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className="relative flex items-start gap-4 py-4 px-8 cursor-pointer group transition-colors"
              >
                {/* Active indicator line */}
                {index === activeIndex && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-white" />
                )}
                
                <span
                  className={`text-lg font-medium mt-0.5 transition-colors ${
                    index === activeIndex ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                  }`}
                >
                  {service.number}
                </span>
                
                <span
                  className={`text-xl font-apfel_grotezk transition-colors ${
                    index === activeIndex ? 'text-white font-bold' : 'text-white/60 font-medium group-hover:text-white/80'
                  }`}
                >
                  {service.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Content Wrapper */}
          {/* Mobile: 100%, Tablet (md): 50%, Desktop (lg): 75% */}
          <div className="w-full md:w-1/2 lg:w-[75%] flex flex-col lg:flex-row">
            
            {/* Text Content */}
            {/* Mobile/Tablet: 100%, Desktop: 36% */}
            <div className="w-full lg:w-[36%] p-8 md:p-12 flex flex-col justify-center bg-white">
              <span className="text-[#C62828] text-xs font-bold tracking-[2px] uppercase mb-6 font-necto_mono">
                {services[activeIndex].subtitle}
              </span>
              
              <h2 className="text-4xl md:text-5xl font-apfel_grotezk text-gray-900 mb-6 leading-tight">
                {services[activeIndex].title}
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {services[activeIndex].description}
              </p>
              
              <a
                href={services[activeIndex].link}
                className="inline-flex items-center gap-3 text-gray-900 text-xs font-bold tracking-[2px] uppercase hover:text-[#C62828] transition-colors group"
              >
                LEARN MORE
                <svg 
                  width="24" 
                  height="12" 
                  viewBox="0 0 24 12" 
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M0 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 1L21 6L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Image */}
            {/* Mobile/Tablet: 100%, Desktop: 64% */}
            <div className="w-full lg:w-[64%] relative min-h-[300px] md:min-h-[400px] lg:min-h-full">
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
