import Feature from "../components/landing/Feature";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";
import Pricing from "../components/landing/Pricing";

function LandingPage() {
  return (
    <>
      <div className="heroeffect overflow-x-clip">
        <Navbar />
        <HeroSection />
      </div>
      <Feature />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}

export default LandingPage;
