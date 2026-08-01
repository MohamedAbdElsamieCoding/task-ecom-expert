import {
  decreaseCameraQuantity,
  increaseCameraQuantity,
} from "../../store/features/bundle/bundleSlice";
import { useAppDispatch } from "../../store/hooks";

type QuantityControlProps = {
  id: number;
  quantity: number;
};

const QuantityControl = ({ quantity, id }: QuantityControlProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-lg text-[#0B0D10]"
        onClick={() => dispatch(decreaseCameraQuantity(id))}
      >
        -
      </button>

      <span className="w-3 text-center font-semibold text-sm">{quantity}</span>

      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-lg text-[#0B0D10]"
        onClick={() => dispatch(increaseCameraQuantity(id))}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
