import Ctabutton from "./Ctabutton";

function CtaSection() {
  return (
    <div className=" bg-[url(/svg/ctanoise.svg)] bg-cover bg-top h-100 flex flex-col items-center justify-center gap-2 mt-32">
      <h1 className=" text-center">Start Managing Work Seamlessly</h1>
      <p className=" text-center text-zinc-600">
        Plan tasks, move work through clear workflows, and stay focused. All in
        one simple, developer-friendly tool.
      </p>
      <div className="flex justify-center px-(--pad-1) py-(--pad-5) h-max">
        <Ctabutton text={"Start now"} />
      </div>
    </div>
  );
}

export default CtaSection;
