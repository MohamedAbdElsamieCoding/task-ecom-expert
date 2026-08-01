import { useAppSelector } from "../../store/hooks";
import Border from "../Border";
import { cameras as cameraCatalog } from "../../data/cameras";
import { sensors as sensorCatalog } from "../../data/sensors";
import { protections as protectionCatalog } from "../../data/protections";
import SaveButton from "./SaveButton";

const parseMoney = (value: string | number | undefined) =>
  typeof value === "number"
    ? value
    : typeof value === "string"
    ? Number(value.replace(/[^0-9.-]+/g, ""))
    : 0;

const CheckoutSummary = () => {
  const { cameras, sensors, protections } = useAppSelector(
    (state) => state.bundle,
  );

  const cameraItems = cameras
    .map((selected) => {
      const camera = cameraCatalog.find((item) => item.id === selected.id);
      if (!camera) return null;
      return {
        quantity: selected.quantity,
        price: camera.price,
        oldPrice: camera.oldPrice,
      };
    })
    .filter((item): item is { quantity: number; price: number; oldPrice: number } => item !== null);

  const sensorItems = sensors
    .map((selected) => {
      const sensor = sensorCatalog.find((item) => item.id === selected.id);
      if (!sensor) return null;
      return {
        quantity: selected.quantity,
        price: parseMoney(sensor.price),
        oldPrice: parseMoney(sensor.oldPrice ?? sensor.price),
      };
    })
    .filter((item): item is { quantity: number; price: number; oldPrice: number } => item !== null);

  const protectionItems = protections
    .map((selected) => {
      const protection = protectionCatalog.find((item) => item.id === selected.id);
      if (!protection) return null;
      return {
        quantity: selected.quantity,
        price: parseMoney(protection.price),
        oldPrice: parseMoney(protection.oldPrice),
      };
    })
    .filter((item): item is { quantity: number; price: number; oldPrice: number } => item !== null);

  const bundleItems = [...cameraItems, ...sensorItems, ...protectionItems];

  const subtotal = bundleItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const originalTotal = bundleItems.reduce(
    (sum, item) => sum + item.oldPrice * item.quantity,
    0,
  );

  const savings = originalTotal - subtotal;

  return (
    <div className="flex flex-col gap-2 mt-2">
      <Border />
      <div className="flex justify-between items-center">
        <img src="/Badge.png" alt="badge" />
        <div className="flex flex-col gap-2 items-end">
          <div className="bg-primary px-2 py-1 w-fit rounded-xl">
            <p className="text-white tracking-tight text-xs font-medium">
              as low as $19.19/mo
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="line-through text-gray-600 text-lg font-medium">
              ${originalTotal.toFixed(2)}
            </p>
            <p className="text-2xl text-primary font-bold">
              ${subtotal.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <p className="text-secondary font-semibold text-xs text-center pt-2.5">
        Congrats! You’re saving <strong> ${savings.toFixed(2)}</strong> on your
        security bundle!
      </p>
      <button className="w-full px-4 py-3 bg-primary font-bold text-white rounded-sm text-center">
        Checkout
      </button>
      <SaveButton />

    </div>
  );
};

export default CheckoutSummary;
