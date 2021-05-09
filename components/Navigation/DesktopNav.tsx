import Logo from "../Logo/Logo";

const DesktopNav = (props: {
  links: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  currentPage: {
    home?: boolean;
    about?: boolean;
    services?: boolean;
    contact?: boolean;
  };
}): JSX.Element => {
  const { currentPage, links } = props;

  return (
    <nav className="w-full bg-gray-100 shadow-lg justify-center hidden md:flex sticky top-0 z-50">
      <div className="flex max-w-7xl space-x-8 flex-1 px-5">
        <div>
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center text-gray-500 h-full justify-center text-lg tracking-wider">
            <a
              href={links.home}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 ${
                currentPage.home ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              <span className="material-icons flex items-center text-xl">
                home
              </span>
              <p className="flex items-center">Home</p>
            </a>
            <a
              href={links.about}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 ${
                currentPage.about ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              <span className="material-icons flex items-center text-xl">
                groups
              </span>
              <p className="flex items-center">About Us</p>
            </a>
            <a
              href={links.services}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 ${
                currentPage.services ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              <span className="material-icons flex items-center text-xl">
                home_repair_service
              </span>
              <p className="flex items-center">Services</p>
            </a>
            <a
              href={links.contact}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 ${
                currentPage.contact ? "text-blue-600" : "hover:text-blue-600"
              }`}
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
