import SectionTitle from "./SectionTitle";

function HowItWorks() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-4 pt-8 pb-8">
      <SectionTitle
        title={"How it Works"}
        para={"DevFlow keeps every task visible, organized, and moving."}
      />
      {/* Image */}
      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 rounded-md ">
        <div className="bg-[url(/svg/feature.svg)] w-full h-64 bg-cover rounded-md border-[0.2px] border-zinc-200">
          <div className="flex flex-col items-center justify-end h-full">
            <div className="bg-bg w-212.5 h-16.5 rounded-t-md border-[0.2px] border-zinc-200"></div>
            <div className="bg-bg w-237.5 h-22.5 rounded-t-md border-[0.2px] border-zinc-200"></div>
          </div>
        </div>
      </div>
      {/* HowitWorks */}
      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7"></div>
    </div>
  );
}

export default HowItWorks;
