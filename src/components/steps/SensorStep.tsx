import { sensors } from "../../data/sensors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
  addSensor,
  decreaseSensorQuantity,
} from "../../store/features/bundle/bundleSlice";

const SensorStep = () => {
  const dispatch = useAppDispatch();
  const selectedSensors = useAppSelector((state) => state.bundle.sensors);

  return (
    <div className="flex flex-col gap-4">
      {sensors.map((sensor) => {
        const selected = selectedSensors.find((item) => item.id === sensor.id);
        const quantity = selected?.quantity ?? 0;

        return (
          <div
            key={sensor.id}
            className={`rounded-xl border p-4 ${
              quantity > 0 ? "border-primary bg-primary/10" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white p-2">
                  <img
                    src={sensor.image}
                    alt={sensor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{sensor.name}</h4>
                  <p className="text-sm text-gray-600">{sensor.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseSensorQuantity(sensor.id))}
                  className="rounded-sm border border-gray-300 p-1 text-gray-600"
                >
                  <LuMinus />
                </button>
                <span className="min-w-5 text-center">{quantity}</span>
                <button
                  onClick={() => dispatch(addSensor(sensor.id))}
                  className="rounded-sm bg-gray-300 p-1 text-black"
                >
                  <LuPlus />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SensorStep;
