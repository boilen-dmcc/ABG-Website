export const AlBarhamFooter = () => {
  return (
    <footer className="text-white bg-gray-800 box-border caret-transparent px-[18.75px] py-12 md:px-0">
      <div className="box-border caret-transparent gap-x-16 flex flex-col max-w-[1240px] gap-y-8 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="box-border caret-transparent">
          <p className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px]">
            © 2026 Al-Barham Group. All rights reserved.
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-6 flex gap-y-6">
          <a
            href="#"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] hover:text-red-600 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] hover:text-red-600 hover:underline"
          >
            Terms of Service
          </a>
        </div>
        <div className="box-border caret-transparent">
          <p className="text-sm text-gray-400 box-border caret-transparent tracking-[0.14px] leading-[21px]">
            Made by Ranj Hamza Farhad
          </p>
        </div>
      </div>
    </footer>
  );
};
