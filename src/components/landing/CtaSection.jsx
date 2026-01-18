import Ctabutton from "./Ctabutton";

function CtaSection() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 pt-8 pb-8 bg-[url(/svg/ctanoise.svg)] bg-cover bg-top">
      <h1 className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7">
        Start Managing Work Without Friction
      </h1>
      <p className="xl:col-start-4 xl:col-end-10 md:col-start-3 md:col-end-7 col-start-2 col-end-7 text-center">
        Plan tasks, move work through clear workflows, and stay focused. All in
        one simple, developer-friendly tool.
      </p>
      <div className="xl:col-start-6 xl:col-end-8 md:col-start-4 md:col-end-6 col-start-4 col-end-5 flex justify-center px-(--pad-1) py-(--pad-5)">
        <Ctabutton text={"Start now"} />
      </div>
    </div>
  );
}

export default CtaSection;
