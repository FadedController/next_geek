import Logo from "../Logo/Logo";

const DesktopNav = (): JSX.Element => {
  return (
    <nav className="w-full bg-gray-100 shadow-lg justify-center hidden md:flex sticky top-0">
      <div className="flex max-w-7xl space-x-8 flex-1 px-5">
        <div>
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center text-gray-500 h-full justify-center text-lg tracking-wider">
            <a
              href="#"
              className="flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600"
            >
              <span className="material-icons flex items-center text-xl">
                home
              </span>
              <p className="flex items-center">Home</p>
            </a>
            <a
              href="#about"
              className="flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600"
            >
              <span className="material-icons flex items-center text-xl">
                groups
              </span>
              <p className="flex items-center">About Us</p>
            </a>
            <a
              href="#"
              className="flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600"
            >
              <span className="material-icons flex items-center text-xl">
                home_repair_service
              </span>
              <p className="flex items-center">Services</p>
            </a>
            <a
              href="#"
              className="flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600"
            >
              <span className="material-icons flex items-center text-xl">
                email
              </span>
              <p className="flex items-center">Contact</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
