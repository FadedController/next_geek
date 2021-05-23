import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="max-w-7xl w-full flex flex-col items-center py-8 px-5 space-y-2">
        <div className="flex md:flex-row flex-col items-center justify-items-center text-gray-50 font-light md:space-x-5">
          {/*<img
            src="/contactInfo.png"
            className="w-96"
            alt="contact information"
          />*/}
          <img src="/contactNumber.png" className="w-52" alt="contact number" />
          <img src="/contactMail.png" className="w-52" alt="contact number" />
        </div>
        <div className="flex items-center justify-items-center pb-1">
          <a href="https://www.facebook.com/NextGeekTech/" target="_blank">
            <img src="/facebook.png" alt="facebook logo" className="h-8" />
          </a>
        </div>
        <p className="text-gray-100 font-semibold">
          Developed by <span className="underline">NextGeek Technologies</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
