import Ctabutton from "./Ctabutton";

function PricingCard({ title, para, price, features }) {
  const featuresArr = features.split(",");
  console.log(featuresArr);
  return (
    <div className="w-max h-120 border-[0.2px] border-zinc-200 shadow-md rounded-md flex flex-col justify-between p-4">
      <div>
        <h4>{title}</h4>
        <h2>{price == null ? "Free" : price + "/month"}</h2>
        <h6 className="">{para}</h6>
        <div>
          {featuresArr.map((features) => (
            <p className="flex gap-2 items-center ">
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
