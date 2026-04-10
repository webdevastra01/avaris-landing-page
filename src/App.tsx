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
