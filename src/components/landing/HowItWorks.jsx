import gsap from "gsap";
import SectionTitle from "./SectionTitle";
import { useGSAP } from "@gsap/react";

function HowItWorks() {
  useGSAP(() => {
    gsap.from(".card", {
      scaleY: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out",
    });

    gsap.from(".workcard", {
      yPercent: 5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.6,
    });
  }, []);
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-4 pt-8 pb-16">
      <SectionTitle
        title={"How it Works"}
        para={"DevFlow keeps every task visible, organized, and moving."}
      />
      {/* Image */}
      {/* <div className=" "> */}
      <div className=" xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 rounded-md bg-[url(/svg/feature.svg)] w-full h-64 bg-cover border-[0.2px] border-zinc-200 mb-8">
        <div className="flex flex-col items-center justify-end h-full relative">
          <div className="bg-bg xl:w-[80%] md:w-[70%] w-[65%] h-[65%] rounded-t-md border-[0.2px] border-zinc-200 card absolute origin-bottom shadow-2xl shadow-[#7dd421]"></div>
          <div className="bg-bg xl:w-[90%] md:w-[80%] w-[75%] h-22.5 rounded-t-md border-[0.2px] border-zinc-200 card origin-bottom shadow-2xl shadow-[#7dd421]"></div>
        </div>
      </div>

      {/* HowitWorks */}
      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7">
        <div className="flex xl:flex-row md:flex-row flex-col justify justify-between gap-2 h-120">
          <div className="workcard xl:flex-col md:flex-col flex justify-between p-4 border-l-[0.2px] xl:border-l-0 md:border-l-0 border-zinc-200">
            <div>
              <h4>Create Tasks</h4>
              <p className="text-zinc-500">
                Create tasks for features, bugs, or improvements and organize
                them instantly on the board.
              </p>
            </div>
            <h4 className="xl:block md:block hidden">01</h4>
          </div>
          <div className="workcard flex flex-col justify-between xl:border-l-[0.2px] xl:border-r-[0.2px] md:border-l-[0.2px] md:border-r-[0.2px] border-l-[0.2px] border-zinc-200 p-4">
            <div>
              <h4>Move Work</h4>
              <p className="text-zinc-500">
                Drag tasks across workflow stages. DevFlow enforces valid
                transitions so work always moves in the right direction.
              </p>
            </div>
            <h4 className="xl:block md:block hidden">02</h4>
          </div>
          <div className="workcard flex flex-col justify-between p-4 border-l-[0.2px] xl:border-l-0 md:border-l-0 border-zinc-200">
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
