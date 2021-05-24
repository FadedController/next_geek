import { useRouter } from "next/router";

const Logo = (): JSX.Element => {
  const router = useRouter();
  return (
    <div
      className="flex text-xl space-x-1 cursor-pointer"
      onClick={() => router.push("#")}
    >
      <img src="logo.png" alt="logo" className="h-16" />
      {/* <h1 className="font-semibold text-blue-700">Next</h1>
      <h2 className="font-normal text-yellow-500">Geek</h2> */}
    </div>
  );
};

export default Logo;
