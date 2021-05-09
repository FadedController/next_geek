import { useRouter } from "next/router";

const Carrers = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="max-w-7xl w-full flex flex-col items-center py-8 px-5 space-y-8">
        <h2 className="text-6xl text-gray-100 font-bold text-center">
          ¡We are looking for freelancers!
        </h2>
        <p className="font-normal text-xl text-gray-100 max-w-5xl text-center">
          We are always looking for freelancers that are excited to work on a
          challenging tech stack in the short and mid term. Contact us for more
          information
        </p>
        <div className="flex flex-col items-center space-y-2 font-semibold">
          <button
            onClick={() => router.push("#")}
            className="transition ease-in-out duration-500 transform hover:scale-110 px-8 py-2 text-lg rounded-full bg-yellow-300 hover:bg-yellow-400 font-semibold tracking-wide"
          >
            Reach Out!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrers;
