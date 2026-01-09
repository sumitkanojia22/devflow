import BentoCards from "./BentoCards";
import SectionTitle from "./SectionTitle";

function Feature() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-4 pt-16 pb-8">
      <SectionTitle
        title={"Features"}
        para={"DevFlow keeps every task visible, organized, and moving."}
      />
      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 p-4">
        <div className="xl:grid xl:grid-cols-4 xl:grid-rows-8 md:grid md:grid-cols-4 md:grid-rows-8 flex flex-col xl:gap-4 md:gap-4 gap-4 xl:h-150 md:h-150 py-8">
          <div className="col-span-2 row-span-5 overflow-hidden rounded-md shadow-(--shadow-md) border-[0.3px] border-zinc-300 p-4 hover:scale-[1.02] transition-all ease-in">
            <BentoCards
              imgsrc={"/images/f1.png"}
              title={"Visual Workflow at a Glance"}
              para={
                "See every task clearly as it moves from idea to completion."
              }
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-1 row-start-6 overflow-hidden rounded-md shadow-(--shadow-md) border-[0.3px] border-zinc-200 p-4 hover:scale-[1.02] transition-all ease-in">
            <BentoCards
              imgsrc={"/images/f2.png"}
              title={"Workflows That Make Sense"}
              para={"Keep work flowing correctly."}
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-1 overflow-hidden rounded-md shadow-(--shadow-md) border-[0.3px] border-zinc-300 p-4 hover:scale-[1.02] transition-all ease-in">
            <BentoCards
              imgsrc={"/images/f3.png"}
              title={"Manage Tasks With Ease"}
              para={"Create, edit, and organize issues directly on the board."}
            />
          </div>
          <div className="col-span-2 row-span-5 col-start-3 row-start-4 overflow-hidden rounded-md shadow-(--shadow-md) border-[0.3px] border-zinc-300 p-4 hover:scale-[1.02] transition-all ease-in">
            <BentoCards
              imgsrc={"/images/f4.png"}
              title={" Find What Matters Instantly"}
              para={" Filter and search issues by status, priority, or title."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
