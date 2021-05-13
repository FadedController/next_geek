import { useRouter } from "next/router";
import { useContext } from "react";
import ContactContext from "../Contact/ContactContext";

const Services = (): JSX.Element => {
  const router = useRouter();
  const [form, setForm] = useContext(ContactContext);
  return (
    <>
      <div
        className="flex justify-center bg-gradient-to-tr from-green-500 via-green-700 to-green-600"
        id="development"
      >
        <div className="max-w-7xl w-full flex py-16 px-5">
          <div className="flex flex-1 md:space-x-16">
            <div className="hidden md:flex flex-1 flex-col justify-center space-y-16">
              <img src="svg/proudCoderGreen.svg" />
              <img src="svg/developmentGreen.svg" />
            </div>
            <div className="flex flex-col flex-1 space-y-5 bg-gray-50 opacity-90 rounded-md p-5 text-justify md:text-left text-lg">
              <h1 className="text-5xl w-full font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-700 pb-2">
                Software Development
              </h1>
              <p>
                For your business to grow and evolve, you need to have access to
                the best software solutions on the market. We are here to ensure
                that you always receive the best value and quality on the
                market. Our software development service is designed with the
                idea of bringing in the best set of features and support, all
                while keeping costs as affordable as possible.
              </p>
              <p>
                Nextgeek Technologies is great for you because we are creating
                bug free, fully customized, heavily tested and high quality
                software to suit your needs. While working with our team you can
                expect a very reliable and fast development phase. In addition,
                we have outstanding communication so you always know what’s
                going on.
              </p>
              <p>
                Our team can create both mobile and desktop apps, we can cater
                to any special requirements too, since we provide custom
                application development services as well. By working with us you
                reduce the time to market, and that leads to a much better ROI
                and an astonishing experience every time.
              </p>
              <p>
                We use the Agile practices in order to create reliable and
                upgradeable software that adapts to your needs. We believe that
                Agile and Scrum are the best software development technologies
                and they are going to do wonders for you in the long run. Thanks
                to our incremental approach you get to see how everything comes
                together and we can also make changes on the fly based on your
                own requirements.
              </p>
              <p>
                The development system we use is all about offering flexibility,
                control and visibility, all in a very comprehensive and powerful
                package.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    router.push("#contact");
                    setForm({
                      ...form,
                      subject: "Software Development Service",
                    });
                  }}
                  className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl rounded-full text-gray-50 bg-gray-800 hover:bg-gray-900 font-semibold tracking-wide"
                >
                  Get Started!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center bg-gradient-to-l from-yellow-400 via-yellow-300 to-yellow-200"
        id="blockchain"
      >
        <div className="max-w-7xl w-full flex py-16 px-5">
          <div className="flex flex-1 md:space-x-16">
            <div className="flex flex-col flex-1 space-y-5 bg-gray-50 opacity-90 rounded-md p-5 text-justify md:text-left text-lg">
              <h1 className="text-5xl w-full font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-500 pb-2">
                Blockchain Development
              </h1>
              <p>
                Blockchain technology offers unlimited opportunities and new
                ways for your company to overcome financial and security
                challenges. By using blockchain you eliminate the uncertainty
                that comes with online transactions. Why should you use
                Blockchain development services? The primary reason is improved
                security, being able to improve the overall security is crucial
                and it can take your business to new heights.
              </p>
              <p>
                Thanks to Blockchain development you have access to a
                decentralized system, party identity abstraction, increased
                capacity, distributed ledger and a much faster settlement. We
                believe that it’s important to adopt Blockchain technology as
                quickly as possible, as it brings in some resounding benefits,
                like creating any piece of tech you want and harnessing the
                power of blockchain thanks to it. Our company can help with
                blockchain wallet development, smart contract audits, Ethereum
                application development, and the creation and establishment of
                initial coin offerings.
              </p>
              <p>
                We also perform Blockchain and IoT integrations, decentralized
                application development, blockchain app development services,
                cryptocurrency exchange platform development and many other
                great features. It’s very important to identify what you need
                and how you can adapt it to your own requirements. We can
                provide only one or all the Blockchain development services
                presented above.
              </p>
              <p>
                Our Blockchain development service is suitable for all
                industries. We can serve E-Commerce, E-Learning, Banking,
                Finances, Healthcare, Real Estate, Insurance and many others. We
                understand that accessing the best Blockchain development
                services can be very hard to do nowadays. Yet we are here to
                ensure that you always get the very best value and quality on
                the market.
              </p>
              <p>
                We believe that nothing is more important than growing your
                business and taking it to new heights. But when you are using
                the blockchain, it’s crucial to have the best Blockchain
                development services to assist you with any requirements you
                might have. Our team has all the Blockchain knowledge and
                experience needed to bring your cryptocurrency project to life
                right away!
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    router.push("#contact");
                    setForm({
                      ...form,
                      subject: "Blockchain Development Service",
                    });
                  }}
                  className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl rounded-full text-gray-50 bg-gray-800 hover:bg-gray-900 font-semibold tracking-wide"
                >
                  Get Started!
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-1 flex-col justify-center space-y-16">
              <img src="svg/digitalCurrencyYellow.svg" />
              <img src="svg/cryptoPortafolioYellow.svg" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center bg-gradient-to-tr from-red-400 via-red-600 to-red-500"
        id="security"
      >
        <div className="max-w-7xl w-full flex py-16 px-5">
          <div className="flex flex-1 md:space-x-16">
            <div className="hidden md:flex flex-1 flex-col justify-center">
              <img src="svg/collectingRed.svg" />
            </div>
            <div className="flex flex-col flex-1 space-y-5 bg-gray-50 opacity-90 rounded-md p-5 text-justify md:text-left text-lg">
              <h1 className="text-5xl w-full font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-700 pb-2">
                Security Consulting
              </h1>
              <p>
                While the business world has many opportunities, it also has its
                fair share of challenges. The software world isn’t always safe
                and you have to find an appropriate, creative and powerful way
                to eliminate any possible challenges and risks that may appear.
                Our team is always here to assist you and we can offer the
                security consulting services you are looking for.
              </p>
              <p>
                Our team can help you assess the situation, figure out what’s
                wrong and actively identify viable solutions that benefit your
                business. We believe that nothing is impossible, and once you
                work with us you will boost your security and improve the
                process in a meaningful way.
              </p>
              <p>
                Every little piece of information matters and by working with us
                you will find the guidance and assistance you need. Whenever you
                need assistance with domain knowledge, extensive security
                audits, security training, we are here to assist. Our belief is
                that investing in security is the ultimate way to grow your
                business and it can always bring in great results.
              </p>
              <p>
                Improved software security will enhance customer trust and it
                will also make it easier for you to bring in safer, higher
                quality solutions to everyone. Stop worrying about potential
                attacks and find the right way to deal with them. With our
                Software security consulting service you finally get the upper
                hand as you eliminate any potential threats and attacks
                naturally.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    router.push("#contact");
                    setForm({
                      ...form,
                      subject: "Security Consulting Service",
                    });
                  }}
                  className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl rounded-full text-gray-50 bg-gray-800 hover:bg-gray-900 font-semibold tracking-wide"
                >
                  Get Started!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center bg-gradient-to-l from-purple-600 via-purple-700 to-purple-900"
        id="automation"
      >
        <div className="max-w-7xl w-full flex py-16 px-5">
          <div className="flex flex-1 md:space-x-16">
            <div className="flex flex-col flex-1 space-y-5 bg-gray-50 opacity-90 rounded-md p-5 text-justify md:text-left text-lg">
              <h1 className="text-5xl w-full font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-purple-900 pb-2">
                Home Automation
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ut
                minus, libero quasi, asperiores dicta a magnam blanditiis quia,
                labore reiciendis doloremque sed excepturi rem facilis
                laboriosam optio natus tenetur? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur quisquam sapiente
                obcaecati fugiat, incidunt quidem sunt laudantium ab enim
                quibusdam optio ex rem beatae delectus voluptates dolorem hic
                quas tempora.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ut
                minus, libero quasi, asperiores dicta a magnam blanditiis quia,
                labore reiciendis doloremque sed excepturi rem facilis
                laboriosam optio natus tenetur? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur quisquam sapiente
                obcaecati fugiat, incidunt quidem sunt laudantium ab enim
                quibusdam optio ex rem beatae delectus voluptates dolorem hic
                quas tempora.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ut
                minus, libero quasi, asperiores dicta a magnam blanditiis quia,
                labore reiciendis doloremque sed excepturi rem facilis
                laboriosam optio natus tenetur? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur quisquam sapiente
                obcaecati fugiat, incidunt quidem sunt laudantium ab enim
                quibusdam optio ex rem beatae delectus voluptates dolorem hic
                quas tempora.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ut
                minus, libero quasi, asperiores dicta a magnam blanditiis quia,
                labore reiciendis doloremque sed excepturi rem facilis
                laboriosam optio natus tenetur? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur quisquam sapiente
                obcaecati fugiat, incidunt quidem sunt laudantium ab enim
                quibusdam optio ex rem beatae delectus voluptates dolorem hic
                quas tempora.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur dolores quam dolorum aspernatur beatae temporibus
                labore earum delectus saepe esse porro necessitatibus,
                perferendis magni sit tenetur ullam iure maxime quo?
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    router.push("#contact");
                    setForm({
                      ...form,
                      subject: "Home Automation Service",
                    });
                  }}
                  className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl rounded-full text-gray-50 bg-gray-800 hover:bg-gray-900 font-semibold tracking-wide"
                >
                  Get Started!
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-1 flex-col justify-center space-y-16">
              <img src="svg/smartHomePurple.svg" />
              <img src="svg/bestPlacePurple.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
