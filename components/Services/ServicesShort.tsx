import { useRouter } from "next/router";

const ServicesShort = (props: {
  links: {
    softwareDevelopment: string;
    blockchainDevelopment: string;
    securityConsulting: string;
    homeAutomation: string;
  };
}): JSX.Element => {
  const router = useRouter();
  const {
    blockchainDevelopment,
    securityConsulting,
    softwareDevelopment,
    homeAutomation,
  } = props.links;
  return (
    <>
      <div className="flex justify-center" id="services">
        <div className="flex max-w-7xl w-full flex-col p-5">
          <div className="py-12 flex flex-col space-y-4">
            <h1 className="text-5xl w-full text-center font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 pb-10">
              Software Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl w-full text-center font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-green-500 to-green-700 pb-3">
                  Software Development
                </h2>
                <div className="flex items-center justify-center">
                  <img src="svg/programmerGreen.svg" className="h-52" />
                </div>
                <p className="text-center font-medium text-lg pt-4">
                  Make sure that you have access to the best software solutions
                  on the market. Our software development service is designed
                  with the idea of bringing in the best set of features and
                  support, all while keeping costs as affordable as possible.
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => router.push(softwareDevelopment)}
                    className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl text-gray-50 rounded-full bg-green-600 hover:bg-green-700 font-semibold tracking-wide"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl w-full text-center font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-yellow-400 to-yellow-600 pb-3">
                  Blockchain Development
                </h2>
                <div className="flex items-center justify-center">
                  <img src="svg/nakamotoYellow.svg" className="h-52" />
                </div>
                <p className="text-center font-medium text-lg pt-4">
                  Blockchain technology offers unlimited opportunities and new
                  ways for your company to prepare for any financial and
                  security challenges. Using blockchain will eliminate
                  uncertainty and other problems that come in your path.
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => router.push(blockchainDevelopment)}
                    className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl text-gray-50 rounded-full bg-yellow-500 hover:bg-yellow-600 font-semibold tracking-wide"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl w-full text-center font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-red-500 to-red-700 pb-3">
                  Security Consulting {/* Software */}
                </h2>
                <div className="flex items-center justify-center">
                  <img src="svg/securityOnRed.svg" className="h-52" />
                </div>
                <p className="text-center font-medium text-lg pt-4">
                  The business world has many opportunities, but it also brings
                  in its fair share of challenges. To help you overcome these
                  challenges, our team is always here to assist you and we can
                  offer the software security consulting services you always
                  wanted.
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => router.push(securityConsulting)}
                    className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl text-gray-50 rounded-full bg-red-600 hover:bg-red-700 font-semibold tracking-wide"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl w-full text-center font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-purple-600 to-purple-900 pb-3">
                  Home Automation {/* Software */}
                </h2>
                <div className="flex items-center justify-center">
                  <img src="svg/smartHomePurple.svg" className="h-52" />
                </div>
                <p className="text-center font-medium text-lg pt-4">
                  Alexa, turn on the lights!. Welcome to the era of Smart Home
                  Automation. We Provide Best Smart Systems Solutions (Lighting
                  Control, HVAC Control ,Blinds & Curtains Control, Garage/Gate
                  Door Control) for Residential and Commercial Projects With
                  Wide Range of Technologies
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => router.push(homeAutomation)}
                    className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl text-gray-50 rounded-full bg-purple-600 hover:bg-purple-700 font-semibold tracking-wide"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesShort;
