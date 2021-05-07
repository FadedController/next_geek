import DesktopNav from "../components/Navigation/DesktopNav";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import AboutShort from "../components/About/AboutShort";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>NextGeek - Home</title>
      </Head>
      <DesktopNav />
      <Hero />
      <AboutShort />
    </>
  );
};

export default IndexPage;
