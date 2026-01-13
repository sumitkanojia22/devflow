import Feature from "../components/landing/Feature";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";
import Pricing from "../components/landing/Pricing";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <HowItWorks />
      <Pricing />
    </>
  );
}

export default LandingPage;
