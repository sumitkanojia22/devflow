import PricingCard from "./PricingCard";
import SectionTitle from "./SectionTitle";

function Pricing() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-4 pt-8 pb-8">
      <SectionTitle
        title={"Pricing"}
        para={"Choose the plan that fits how you work today,upgrade anytime."}
      />
      <PricingCard
        title={"Starter"}
        para={"For individuals and learning teams"}
        features={"Unlimited personal projects,Kanban board & workflows"}
      />
    </div>
  );
}

export default Pricing;
