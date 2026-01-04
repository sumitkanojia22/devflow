import HeroSection from "../components/landing/HeroSection";
import Navbar from "../components/landing/Navbar";

function LandingPage() {
  return (
    <div className="bg-[url('/svg/hero.svg')] bg-no-repeat bg-top bg-cover">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
