const Hero = (): JSX.Element => {
  return (
    <div className="flex justify-center bg-gradient-to-l from-blue-800 via-blue-700 to-blue-900">
      <div className="max-w-7xl flex w-full px-5 py-20">
        <div className="flex flex-col flex-1 space-y-10">
          <h1 className="font-bold tracking-wide text-6xl text-gray-50">
            IT Experts for Fast Growing Companies
          </h1>
          <h3 className="text-3xl text-gray-50 tracking-wide">
            Upscale your business through Software Development & Other Services.
          </h3>
          <div className="pt-5">
            <a
              href="#"
              className="transition px-10 py-3 text-xl rounded-full bg-gray-100 hover:bg-yellow-300 font-semibold tracking-wide"
            >
              Get In Touch!
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-1">
          <img src="svg/heroDev.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
