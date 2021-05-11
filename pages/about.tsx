import Head from "next/head";
import About from "../components/About/About";
import AboutShort from "../components/About/AboutShort";
import Team from "../components/About/Team";
import Carrers from "../components/Banners/Carrers";
import BackToTop from "../components/Contact/BackToTop";
import Contact from "../components/Contact/Contact";
import AboutHero from "../components/Hero/AboutHero";
import DesktopNav from "../components/Navigation/DesktopNav";
import MobileNav from "../components/Navigation/MobileNav";

const links = {
  about: "#",
  contact: "#contact",
  home: "/",
  services: "/services",
};

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title className="bg-yellow-400">NextGeek - About</title>
      </Head>
      <DesktopNav currentPage={{ about: true }} links={links} />
      <MobileNav links={links} />
      <AboutHero />
      <AboutShort link="#team" />
      <About />
      <Team />
      <Carrers />
      <Contact />
      <BackToTop />
    </>
  );
};

export default AboutPage;
