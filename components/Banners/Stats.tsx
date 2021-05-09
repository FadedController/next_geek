const Stats = (): JSX.Element => {
  return (
    <div className="justify-center flex bg-gradient-to-t from-blue-400 to-blue-500">
      <div className="max-w-7xl w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 px-5 py-8">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <span className="text-6xl text-gray-100 font-bold transition transform hover:scale-110 cursor-pointer">
            14+
          </span>
          <p className="font-normal text-xl text-gray-100">Partners</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <span className="text-6xl text-gray-100 font-bold transition transform hover:scale-110 cursor-pointer">
            55+
          </span>
          <p className="font-normal text-xl text-gray-100">Projects</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <span className="text-6xl text-gray-100 font-bold transition transform hover:scale-110 cursor-pointer">
            89+
          </span>
          <p className="font-normal text-xl text-gray-100">
            Satisfied Customers
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <span className="text-6xl text-gray-100 font-bold transition transform hover:scale-110 cursor-pointer">
            150+
          </span>
          <p className="font-normal text-xl text-gray-100">Meetings</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
