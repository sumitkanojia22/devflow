import Feature from "../components/landing/Feature";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <HowItWorks />
    </>
  );
}

export default LandingPage;
