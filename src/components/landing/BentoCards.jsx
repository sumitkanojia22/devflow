function BentoCards({
  colspan,
  rowspan,
  colstart,
  rowstart,
  colend,
  rowend,
  imgsrc,
  title,
  para,
}) {
  return (
    <div
      className={`col-span-${colspan} row-span-${rowspan} col-start-${colstart} row-start-${rowstart} col-end-${colend} row-end-${rowend} hover:scale-105 transition-all ease border-[0.5px] border-zinc-300 p-6 shadow-(--shadow-md) rounded-md overflow-hidden`}
    >
      <h4>{title}</h4>
      <p className="text-zinc-500">{para}</p>
      <img className="bg-center rounded-md h-full" src={imgsrc} alt={title} />
    </div>
  );
}

export default BentoCards;
