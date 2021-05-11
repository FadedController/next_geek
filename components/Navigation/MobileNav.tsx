import React, { useState } from "react";
import Logo from "../Logo/Logo";

const MobileNav: React.FC<{
  links: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
}> = ({ links }) => {
  const [navState, setNavState] = useState(false);
  const { about, contact, home, services } = links;
  return (
    <div className="md:hidden sticky top-0 z-50">
      <div className="flex bg-gray-100 justify-center items-center px-5">
        <div className="flex flex-1">
          <div className="font-semibold flex items-center">
            <Logo />
          </div>
          <div className="flex flex-1 justify-end">
            <span
              className={`cursor-pointer transition material-icons text-4xl pt-2 px-2 ${
                navState ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setNavState(false)}
            >
              close
            </span>
            <span
              className="cursor-pointer material-icons text-4xl pt-2"
              onClick={() => setNavState(!navState)}
            >
              menu
            </span>
          </div>
        </div>
      </div>
      <nav className={`${navState && "topbar-open"} topbar bg-gray-100 px-5 `}>
        <ul
          className="flex space-y-3 pb-4 flex-col flex-1 text-xl tracking-widest"
          onClick={() => setNavState(false)}
        >
          <div className="flex flex-col space-y-3 text-gray-500 h-full justify-center text-lg tracking-wider">
            <a
              href={home}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600`}
            >
              <span className="material-icons flex items-center text-xl">
                home
              </span>
              <p className="flex items-center">Home</p>
            </a>
            <a
              href={about}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600`}
            >
              <span className="material-icons flex items-center text-xl">
                groups
              </span>
              <p className="flex items-center">About Us</p>
            </a>
            <a
              href={services}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600`}
            >
              <span className="material-icons flex items-center text-xl">
                home_repair_service
              </span>
              <p className="flex items-center">Services</p>
            </a>
            <a
              href={contact}
              className={`flex space-x-2 px-3 cursor-pointer transition h-full bg-gray-100 hover:bg-gray-200 hover:text-blue-600`}
            >
              <span className="material-icons flex items-center text-xl">
                email
              </span>
              <p className="flex items-center">Contact</p>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
