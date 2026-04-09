export const Page2Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2026 Al-Barham Group. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs sm:text-sm text-gray-500">
              Made by Ranj Hamza Farhad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
