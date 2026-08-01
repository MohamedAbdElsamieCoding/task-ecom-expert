import Border from "../Border";
import { useAppSelector } from "../../store/hooks";
import { plans } from "../../data/plans";

const PlanItem = () => {
  const planId = useAppSelector((state) => state.bundle.planId);
  const plan = plans.find((p) => p.id === planId);

  if (!plan) return null;
  return (
    <div className="flex flex-col gap-2 mt-2">
      <Border />
      <h3 className="text-xs font-normal text-gray-500">
        Home monitoring plan
      </h3>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-1">
          <img src="/icons/Layer_1.png" alt="icon" />
          <p className="font-bold text-sm">{plan.name}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="line-through font-medium text-gray-600 text-xs">
            {plan.oldPrice}
          </p>
          <p className="text-primary text-xs font-bold">{plan.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanItem;
