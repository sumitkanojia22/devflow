function BentoCards({ imgsrc, title, para }) {
  return (
    <>
      <h4 className="">{title}</h4>
      <p className="text-zinc-500">{para}</p>
      <img
        className="bg-center rounded-md h-fit xl:h-full md:h-full"
        src={imgsrc}
        alt={title}
      />
    </>
  );
}

export default BentoCards;
