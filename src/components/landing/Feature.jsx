function Feature() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-2">
      <h3 className="xl:col-start-5 xl:col-end-9 md:col-start-4 md:col-end-6 col-start-3 col-end-6 text-center">
        Features
      </h3>
      <p className="xl:col-start-5 xl:col-end-9 md:col-start-4 md:col-end-6 col-start-3 col-end-6 text-zinc-500 text-center">
        DevFlow keeps every task visible, organized, and moving.
      </p>

      <div className="xl:col-start-3 xl:col-end-11 md:col-start-2 md:col-end-8 col-start-2 col-end-7 p-4">
        <div className="grid grid-cols-4 grid-rows-8 gap-4 h-150">
          <div className="col-span-2 row-span-5 rounded-md">
            <h5>Visual Workflow at a Glance</h5>
            <p className="text-zinc-500">
              See every task clearly as it moves from idea to completion.
            </p>
          </div>
          <div className="col-span-2 row-span-3 col-start-1 row-start-6  rounded-md">
            <h5>Workflows That Make Sense</h5>
            <p>
              Built-in rules prevent invalid transitions and keep work flowing
              correctly.
            </p>
          </div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-1  rounded-md">
            <h5>Find What Matters Instantly</h5>
            <p>
              Filter and search issues by status, priority, or title in seconds.
            </p>
          </div>
          <div className="col-span-2 row-span-5 col-start-3 row-start-4 rounded-md">
            <h5>Manage Tasks Without Context Switching</h5>
            <p>Create, edit, and organize issues directly on the board.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
