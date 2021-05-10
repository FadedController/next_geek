import DesktopNav from "../components/Navigation/DesktopNav";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import AboutShort from "../components/About/AboutShort";
import Stats from "../components/Banners/Stats";
import ServicesShort from "../components/Services/ServicesShort";
import Carrers from "../components/Banners/Carrers";
import Contact from "../components/Contact/Contact";

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
      <DesktopNav
        currentPage={{ home: true }}
        links={{
          home: "#",
          about: "/about",
          contact: "#contact",
          services: "/services",
        }}
      />
      <Hero />
      <AboutShort link="/about#team" />
      <Stats />
      <ServicesShort
        links={{
          blockchainDevelopment: "/services#blockchain",
          securityConsulting: "/services#security",
          softwareDevelopment: "/services#development",
        }}
      />
      <Carrers />
      <Contact />
    </>
  );
};

export default IndexPage;
