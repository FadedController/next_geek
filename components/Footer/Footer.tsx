import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="max-w-7xl w-full flex flex-col items-center py-8 px-5 space-y-2">
        <div className="flex items-center justify-items-center text-gray-50 font-light space-x-5">
          <p>+91-9930249626</p>
          <p>mail@mail.com</p>
        </div>
        <p className="text-gray-100 font-semibold">
          Developed by <span className="underline">NextGeek Technologies</span>
        </p>
        <div className="flex items-center justify-items-center">
          {/**Social media icons */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
