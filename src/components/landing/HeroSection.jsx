import Ctabutton from "./Ctabutton";

function HeroSection() {
  return (
    <div className="w-full grid grid-cols-12 gap-x-2 pt-12">
      <div className="col-start-3 col-end-11 text-9xl font-primary -tracking-h6 text-center px-(--pad-1) py-(--pad-3)">
        Devflows
      </div>
      <h3 className="col-start-3 col-end-11 text-center  py-(--pad-1)">
        Manage Work the Way
        <span className="font-bold text-cta"> ' Developers '</span> Think.
      </h3>
      <p className="col-start-4 col-end-10 text-zinc-500 text-center py-(--pad-1)">
        A clean, Kanban-based issue tracker designed to visualize tasks, enforce
        workflows, and keep development moving smoothly.
      </p>
      <div className="col-start-6 col-end-8 flex justify-center px-(--pad-1) py-(--pad-5)">
        <Ctabutton text={"Get Started"} />
      </div>

      <div className="col-start-4 col-end-10 h-100 px-[var(--pad-1)] py-[var(--pad-3)] bg-[url(/images/herosecbelow.png)] bg-cover bg-no-repeat bg-center rounded-md"></div>
    </div>
  );
}

export default HeroSection;
