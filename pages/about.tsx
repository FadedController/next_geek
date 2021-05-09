import Head from "next/head";
import AboutShort from "../components/About/AboutShort";
import Carrers from "../components/Banners/Carrers";
import AboutHero from "../components/Hero/AboutHero";
import DesktopNav from "../components/Navigation/DesktopNav";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>NextGeek - About</title>
      </Head>
      <DesktopNav
        currentPage={{ about: true }}
        links={{
          about: "#",
          contact: "#contact",
          home: "/",
          services: "/services",
        }}
      />
      <AboutHero />
      <AboutShort />
      <Carrers />
    </>
  );
};

export default AboutPage;
