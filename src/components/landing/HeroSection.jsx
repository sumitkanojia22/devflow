import Ctabutton from "./Ctabutton";

function HeroSection() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 pt-12 ">
      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 xl:text-9xl md:text-8xl text-7xl font-primary -tracking-h6 text-center px-(--pad-1) py-(--pad-3)">
        Devflow
      </div>
      <h4 className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 text-center  py-(--pad-1)">
        Manage Work the Way
        <span className="font-bold text-cta"> ' Developers '</span> Think.
      </h4>
      <p className="xl:col-start-4 xl:col-end-10 md:col-start-3 md:col-end-7 col-start-2 col-end-7  text-zinc-500 text-center py-(--pad-1)">
        A clean, Kanban-based tracker designed to visualize tasks & workflows.
      </p>
      <div className="xl:col-start-6 xl:col-end-8 md:col-start-4 md:col-end-6 col-start-4 col-end-5 flex justify-center px-(--pad-1) py-(--pad-5)">
        <Ctabutton text={"Get Started"} />
      </div>

      <div className="xl:col-start-4 xl:col-end-10 md:col-start-2 md:col-end-8 col-start-2 col-end-7 xl:h-100 md:h-100 h-70  bg-[url(/images/herosecbelow.png)] bg-cover bg-no-repeat bg-center rounded-md"></div>
    </div>
  );
}

export default HeroSection;
