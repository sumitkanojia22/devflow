import Ctabutton from "./Ctabutton";

function PricingCard({ title, para, price, features }) {
  const featuresArr = features.split(",");
  console.log(featuresArr);
  return (
    <div className="w-max h-120 border-[0.2px] border-zinc-200 shadow-md rounded-md">
      <h4>{title}</h4>
      <h2>{price == null ? "Free" : price + "/month"}</h2>
      <h6 className="">{para}</h6>
      <div>
        {featuresArr.map((features) => (
          <p>{features}</p>
        ))}
      </div>
      <Ctabutton text={"Get Started"} />
    </div>
  );
}

export default PricingCard;
