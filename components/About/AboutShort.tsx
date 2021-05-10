import { useRouter } from "next/router";

const AboutShort = ({ link }: { link: string }): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex justify-center" id="about">
      <div className="max-w-7xl w-full md:space-x-5 p-5 flex">
        <div className="hidden md:flex justify-center items-center flex-1">
          <img src="svg/aboutShort.svg" className="w-9/12" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 pt-16 text-justify md:text-left">
          <h1 className="text-5xl w-full font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 pb-3">
            About Us
          </h1>
          <p className="font-semibold text-xl">
            Welcome to Nextgeek Technologies, a company created to provide you
            with the best and highest quality software development, software
            security and blockchain services that you can find on the market.{" "}
          </p>
          <p className="font-normal text-lg">
            We know that picking the right systems and approach will be quite
            thrilling and unique in its own right, but with the best system and
            ideas you will fare really well. It’s definitely worth it to take
            your time as you actively figure out the system and the entire
            process. But we will be there with you every step of the way and you
            will have access to some of the very best technologies on the
            market, things that will impress you again and again all the time.
            Every little detail matters and that’s exactly why you need a team
            of experts to work for you.
          </p>
          <p className="font-normal text-lg">
            Thanks to our team you will receive the assistance and support you
            want, all while being able to create a powerful website, including
            state of the art security solutions. Nextgeek Technologies is here
            to help you every step of the way. We know that creating a powerful
            business and adapting it to your needs is never easy to do, but the
            potential and benefits can be huge if you do it right. All you need
            to do is to contact us and let us know what we can do for you.
          </p>
          <div className="pt-6">
            <button
              onClick={() => router.push(link)}
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
