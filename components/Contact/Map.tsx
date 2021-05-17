import React, { useState } from "react";

const Map: React.FC = () => {
  const [state, setState] = useState(true);

  return (
    <div className="relative">
      {state && (
        <div
          onMouseEnter={() => setState(false)}
          className={`absolute transition cursor-pointer flex justify-center items-center top-0 bg-[#fcd34d4d] w-full h-full`}
        >
          <button className="transition animate-bounce ease-in-out duration-500 transform hover:scale-110 px-12 py-4 text-4xl text-gray-50 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold tracking-wide">
            Find Us!
          </button>
        </div>
      )}
      <iframe
        onMouseEnter={() => setState(false)}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.2085190076696!2d72.87867283677201!3d19.26422219881443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE1JzUxLjIiTiA3MsKwNTInNDUuNiJF!5e0!3m2!1sen!2smx!4v1621292188183!5m2!1sen!2smx"
        className="w-full"
        height="450"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
