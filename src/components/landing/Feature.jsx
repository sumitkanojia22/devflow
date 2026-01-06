import BentoCards from "./BentoCards";

function Feature() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-4 pt-16 pb-8">
      <h2 className="xl:col-start-5 xl:col-end-9 md:col-start-4 md:col-end-6 col-start-3 col-end-6 text-center">
        Features
      </h2>
      <p className="xl:col-start-5 xl:col-end-9 md:col-start-4 md:col-end-6 col-start-3 col-end-6 text-zinc-500 text-center">
        DevFlow keeps every task visible, organized, and moving.
      </p>

      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 p-4">
        <div className="grid grid-cols-4 grid-rows-8 gap-8 h-150">
          <BentoCards
            colspan={"2"}
            rowspan={"5"}
            colstart={"1"}
            rowstart={"1"}
            imgsrc={"public/images/f1.png"}
            title={"Visual Workflow at a Glance"}
            para={"See every task clearly as it moves from idea to completion."}
          />
          <BentoCards
            colspan={"2"}
            rowspan={"3"}
            colstart={"1"}
            rowstart={"6"}
            imgsrc={"public/images/f2.png"}
            title={"Workflows That Make Sense"}
            para={
              "Built-in rules prevent invalid transitions and keep work flowing correctly."
            }
          />
          <BentoCards
            colspan={"2"}
            rowspan={"3"}
            colstart={"3"}
            rowstart={"1"}
            imgsrc={"public/images/f3.png"}
            title={"Find What Matters Instantly"}
            para={
              "Filter and search issues by status, priority, or title in seconds."
            }
          />
          <BentoCards
            colspan={"2"}
            rowspan={"5"}
            colstart={"3"}
            rowstart={"4"}
            imgsrc={"public/images/f4.png"}
            title={"Manage Tasks With Ease"}
            para={"Create, edit, and organize issues directly on the board."}
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
