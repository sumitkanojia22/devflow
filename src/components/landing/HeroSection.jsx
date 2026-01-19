import gsap from "gsap";
import Ctabutton from "./Ctabutton";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".herosec", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });

    gsap.from(".herosecimg", {
      y: 100,
      opacity: 0,
      duration: 0.8,
    });
  }, []);
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 pt-16 pb-8">
      {/* Header */}
      <div className="herosec xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 xl:text-9xl md:text-8xl text-7xl font-primary -tracking-h6 text-center px-(--pad-1) py-(--pad-3) overflow-hidden">
        Devflow
      </div>

      {/* Sub-Heading */}
      <h4 className=" herosec xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 text-center  py-(--pad-1)">
        Manage Work the Way
        <span className="font-bold text-cta"> ' Developers '</span> Think.
      </h4>

      {/* Paragraph */}
      <p className="herosec xl:col-start-4 xl:col-end-10 md:col-start-3 md:col-end-7 col-start-2 col-end-7  text-zinc-500 text-center py-(--pad-1)">
        A clean, Kanban-based tracker designed to visualize tasks & workflows.
      </p>

      {/* CTAbtn */}
      <div className="herosec xl:col-start-6 xl:col-end-8 md:col-start-4 md:col-end-6 col-start-4 col-end-5 flex justify-center px-(--pad-1) py-(--pad-5)">
        <Ctabutton text={"Get Started"} />
      </div>

      {/* Image BG */}
      <div className="herosecimg xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 xl:h-120 md:h-100 h-70 border-[0.2px] border-zinc-200   bg-[url(/images/herosecbelow.png)] xl:bg-cover md:bg-contain bg-contain bg-top bg-no-repeat rounded-md"></div>
    </div>
  );
}

export default HeroSection;
