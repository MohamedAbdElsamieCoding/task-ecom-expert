import { camerasReview } from "../../data/reviewData";
import CheckoutSummary from "./CheckoutSummary";
import PlanItem from "./PlanItem";
import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import ShippingItem from "./ShippingItem";

const Checkout = () => {
  return (
    <aside className="md:p-4 w-full">
      <div className="bg-[#EDF4FF] border-t px-5 py-2 md:px-4 md:py-4 md:rounded-xl">
        <ReviewHeader />
        <div>
          <ReviewSection items={camerasReview} title="Cameras" />
          <PlanItem />
          <ShippingItem />
          <CheckoutSummary />
        </div>
      </div>
    </aside>
  );
};

export default Checkout;
