import { useRouter } from "next/router";

const AboutShort = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex justify-center" id="about">
      <div className="max-w-7xl w-full md:space-x-5 p-5 flex">
        <div className="hidden md:flex flex-1">
          <img src="svg/aboutShort.svg" className="w-9/12" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 py-16 text-justify md:text-left">
          <h1 className="text-5xl w-full font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 pb-3">
            About Us
          </h1>
          <p className="font-semibold text-xl">
            Welcome to Nextgeek Technologies, a company created to provide you
            with the best and highest quality software development, software
            security and blockchain services that you can find on the market.{" "}
          </p>
          <p className="font-normal text-lg">
            We are working very hard to bring in front outstanding features and
            benefits, all while making sure that customers are extremely happy
            with the results every time. We have more than 5 years of experience
            in each one of the industries and we work very hard to ensure that
            you always get the ultimate value for your money, no matter the
            situation.
          </p>
          <p className="font-normal text-lg">
            If you want to grow your business you always need to create a good
            website, and you also have to optimize and customize it to suit your
            needs. But the most important part is that you need to focus on
            developing the right features and systems that customers want to use
            from your business. That’s why you should always consider studying
            the market, finding out what people want and then based on that you
            can customize and optimize everything to suit your needs in a
            meaningful way.
          </p>
          <div className="pt-6">
            <button
              onClick={() => router.push("#")}
              className="transition ease-in-out duration-500 transform hover:scale-110 px-10 py-3 text-xl rounded-full bg-yellow-300 hover:bg-yellow-400 font-semibold tracking-wide"
            >
              Meet Our Team!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutShort;
