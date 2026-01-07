function SectionTitle({ title, para }) {
  return (
    <>
      ;
      <h2 className="xl:col-start-5 xl:col-end-9 md:col-start-4 md:col-end-6 col-start-3 col-end-6 text-center">
        {title}
      </h2>
      <p className="xl:col-start-5 xl:col-end-9 md:col-start-4 md:col-end-6 col-start-3 col-end-6 text-zinc-500 text-center">
        {para}
      </p>
      ;
    </>
  );
}

export default SectionTitle;
