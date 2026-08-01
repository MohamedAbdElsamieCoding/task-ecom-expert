import { plans } from "../../data/plans";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectPlan } from "../../store/features/bundle/bundleSlice";

const PlanStep = () => {
  const dispatch = useAppDispatch();
  const selectedPlanId = useAppSelector((state) => state.bundle.planId);

  return (
    <div className="flex flex-col gap-4">
      {plans.map((plan) => {
        const isSelected = selectedPlanId === plan.id;

        return (
          <button
            key={plan.id}
            onClick={() => dispatch(selectPlan(plan.id))}
            className={`rounded-xl border p-4 text-left transition-all ${
              isSelected
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/40"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="font-semibold text-lg">{plan.name}</h4>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
              <div className="text-right">
                <p className="text-red-600 line-through text-sm">
                  {plan.oldPrice}
                </p>
                <p className="text-primary font-semibold">{plan.price}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PlanStep;
