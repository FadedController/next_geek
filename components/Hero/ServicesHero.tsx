import { useRouter } from "next/router";

const ServicesHero = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-gray-200 shadow-inner">
      <div className="max-w-7xl flex w-full px-5 py-20">
        <div className="flex flex-col flex-1 space-y-10 md:pr-5">
          <h1 className="font-bold tracking-wide text-5xl md:text-6xl text-gray-900">
            Get what your business needs
          </h1>
          <h3 className="text-3xl text-gray-900 tracking-wide">
            Take a look at the different services we offer to your business
          </h3>
          <div className="pt-5">
            <button
              onClick={() => router.push("#services")}
              className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl rounded-full text-gray-50 bg-blue-800 hover:bg-blue-900 font-semibold tracking-wide"
            >
              Take a look!
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <img src="svg/operatingSystemBlue.svg" />
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
