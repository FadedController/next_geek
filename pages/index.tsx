import DesktopNav from "../components/Navigation/DesktopNav";
import Head from "next/head";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>NextGeek - Home</title>
      </Head>
      <DesktopNav />
    </>
  );
};

export default IndexPage;
