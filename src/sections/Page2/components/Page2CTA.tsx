import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

    export const Page2CTA = () => {
      return (
        <div className="box-border caret-transparent gap-x-0 grid grid-cols-1 gap-y-0 w-full md:grid-cols-2">
          <div className="relative text-white bg-gray-900 box-border caret-transparent flex justify-end overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770306312581-0.jpeg" 
                alt="Join Our Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/80"></div>
            </div>
            <div className="box-border caret-transparent flex flex-col justify-center max-w-[700px] w-full min-h-[400px] p-12 relative z-10">
              <h2 className="text-4xl font-bold box-border caret-transparent mb-4 font-apfel_grotezk md:text-5xl">
                Join Our Team
              </h2>
              <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-8 mb-8">
                We are always looking for passionate, talented, and creative people to join our team
              </p>
              
              <Link
                to="/careers"
                className="group inline-flex items-center gap-4 w-fit"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-base md:text-xl font-semibold">View Careers</span>
              </Link>
            </div>
          </div>
    <div className="relative text-white bg-gray-900 box-border caret-transparent flex justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770306699911-0.jpeg" 
          alt="Let's Collaborate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>
      <div className="box-border caret-transparent flex flex-col justify-center max-w-[700px] w-full min-h-[400px] p-12 relative z-10">
        <h2 className="text-4xl font-bold box-border caret-transparent mb-4 font-apfel_grotezk md:text-5xl">
          Let's Collaborate
        </h2>
              <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-8 mb-8">
                Let us assist you in determining the best solution for your project. Start the conversation today!
              </p>
              
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 w-fit"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:scale-110">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-base md:text-xl font-semibold">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      );
    };
