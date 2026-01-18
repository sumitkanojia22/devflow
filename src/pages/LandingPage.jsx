import Feature from "../components/landing/Feature";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";
import Pricing from "../components/landing/Pricing";
import CtaSection from "../components/landing/CtaSection.jsx";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="heroeffect overflow-x-clip">
        <HeroSection />
      </div>
      <Feature />
      <HowItWorks />
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
}

export default LandingPage;
