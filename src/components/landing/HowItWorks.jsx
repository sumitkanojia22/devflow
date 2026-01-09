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
      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7">
        <div className="flex xl:flex-row md:flex-row flex-col justify justify-between gap-2 h-120">
          <div className="xl:flex-col md:flex-col flex justify-between p-4 border-l-[0.2px] xl:border-l-0 md:border-l-0 border-zinc-200">
            <div>
              <h4>Create Tasks</h4>
              <p className="text-zinc-500">
                Create tasks for features, bugs, or improvements and organize
                them instantly on the board.
              </p>
            </div>
            <h4 className="xl:block md:block hidden">01</h4>
          </div>
          <div className="flex flex-col justify-between xl:border-l-[0.2px] xl:border-r-[0.2px] md:border-l-[0.2px] md:border-r-[0.2px] border-l-[0.2px] border-zinc-200 p-4">
            <div>
              <h4>Move Work</h4>
              <p className="text-zinc-500">
                Drag tasks across workflow stages. DevFlow enforces valid
                transitions so work always moves in the right direction.
              </p>
            </div>
            <h4 className="xl:block md:block hidden">02</h4>
          </div>
          <div className="flex flex-col justify-between p-4 border-l-[0.2px] xl:border-l-0 md:border-l-0 border-zinc-200">
            <div>
              <h4>Stay Focused</h4>
              <p className="text-zinc-500">
                Use search and filters to instantly find tasks by status,
                priority, or title.
              </p>
            </div>
            <h4 className="xl:block md:block hidden">03</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
