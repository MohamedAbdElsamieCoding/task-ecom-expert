import { protections } from "../../data/protections";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectProtection } from "../../store/features/bundle/bundleSlice";

const ProtectionStep = () => {
  const dispatch = useAppDispatch();
  const selectedProtections = useAppSelector(
    (state) => state.bundle.protections,
  );

  return (
    <div className="flex flex-col gap-4">
      {protections.map((protection) => {
        const isSelected = selectedProtections.some(
          (item) => item.id === protection.id,
        );

        return (
          <button
            key={protection.id}
            onClick={() => dispatch(selectProtection(protection.id))}
            className={`rounded-xl border p-4 text-left transition-all ${
              isSelected
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/40"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="font-semibold text-lg">{protection.name}</h4>
                <p className="text-sm text-gray-600">
                  {protection.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-red-600 line-through text-sm">
                  {protection.oldPrice}
                </p>
                <p className="text-primary font-semibold">{protection.price}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ProtectionStep;
