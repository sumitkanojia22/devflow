import Ctabutton from "./Ctabutton";

function PricingCard({ title, para, price, features, bgNum = false }) {
  const featuresArr = features.split(",");
  return (
    <div
      className={`zxl:w-87.5 xl:h-120 md:w-[50%] md:h-100 w-87.5 h-120 border-[0.2px] border-zinc-200 rounded-md flex flex-col justify-between p-6 shadow-2xl scale-95 hover:scale-100 transition-all ease-in ${
        bgNum ? "shadow-cta scale-105 hover:scale-110" : "shadow-zinc-200"
      } `}
    >
      <div className="flex flex-col gap-2">
        <h4>{title}</h4>
        <h2>{price == null ? "Free" : price + "/month"}</h2>
        <h6 className="">{para}</h6>
        <div>
          {featuresArr.map((features, index) => (
            <p key={index} className="flex gap-2 items-center ">
              <span className="size-2 rounded-full bg-cta"></span>
              {features}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Ctabutton text={"Get Started"} />
      </div>
    </div>
  );
}

export default PricingCard;
