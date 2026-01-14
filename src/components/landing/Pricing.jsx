import PricingCard from "./PricingCard";
import SectionTitle from "./SectionTitle";

function Pricing() {
  return (
    <div className="w-full grid grid-cols-7 md:grid-cols-8 xl:grid-cols-12 gap-x-2 gap-y-4 pt-8 pb-8">
      <SectionTitle
        title={"Pricing"}
        para={"Choose the plan that fits how you work today,upgrade anytime."}
      />
      <div className="xl:col-start-2 xl:col-end-12 md:col-start-1 md:col-end-9 col-start-2 col-end-7 p-4">
        <div className="xl:flex xl:flex-row md:flex md:flex-col flex flex-col justify-evenly items-center gap-4">
          <PricingCard
            title={"Starter"}
            para={"For individuals and learning teams"}
            features={
              "Unlimited personal projects,Kanban board & workflows,Issue creation & management, Search & filters, Local persistence"
            }
          />
          <PricingCard
            title={"Pro"}
            price={"₹499"}
            para={"For serious builders and small teams"}
            features={
              "Free included, Multiple projects & boards, Advanced workflow rules, Priority & status management, Faster performance experience"
            }
            bgNum={0}
          />
          <PricingCard
            title={"Team"}
            price={"₹1,499"}
            para={"For growing teams and collaboration"}
            features={
              "Free + Pro included ,Team boards & shared workflows, Role-based task organization, Activity tracking ,Scalable architecture ready"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
