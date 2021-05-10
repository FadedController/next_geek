import Head from "next/head";
import Carrers from "../components/Banners/Carrers";
import Contact from "../components/Contact/Contact";
import ServicesHero from "../components/Hero/ServicesHero";
import DesktopNav from "../components/Navigation/DesktopNav";
import Services from "../components/Services/Services";
import ServicesShort from "../components/Services/ServicesShort";

const ServicesPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>NextGeek - Services</title>
      </Head>
      <DesktopNav
        currentPage={{ services: true }}
        links={{
          about: "/about",
          contact: "#contact",
          home: "/",
          services: "#services",
        }}
      />
      <ServicesHero />
      <ServicesShort
        links={{
          blockchainDevelopment: "#blockchain",
          softwareDevelopment: "#development",
          securityConsulting: "#security",
        }}
      />
      <Services />
      <Carrers />
      <Contact />
    </>
  );
};

export default ServicesPage;
