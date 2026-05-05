import { Helmet } from "react-helmet-async";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigationbar from "./components/NavigationBar";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import TrustProblemSection from "./components/TrustProblemSection";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Avaris Sales Solutions | 24/7 Outsourced Sales Support Philippines
        </title>

        <meta
          name="description"
          content="Avaris Sales Solutions provides 24/7 outsourced sales support, lead management, and structured follow-ups to help businesses capture every opportunity and close more deals."
        />

        <meta
          name="keywords"
          content="outsourced sales support, lead management services, sales outsourcing Philippines, 24/7 sales support, lead follow up system"
        />

        <meta
          property="og:title"
          content="Avaris Sales Solutions | We Sell, You Excel"
        />

        <meta
          property="og:description"
          content="Turn missed leads into consistent sales with Avaris Sales Solutions. 24/7 outsourced sales support and lead management."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://avaris.astragroupph.com/" />

        <meta
          name="google-site-verification"
          content="8n6Y3_x3CUtbSQU5Y2SOenDGzYi_Dlsz3Cm-D7W8IYs"
        />
      </Helmet>

      <Navigationbar />
      <HeroSection />
      <TrustProblemSection />
      <CTA />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
