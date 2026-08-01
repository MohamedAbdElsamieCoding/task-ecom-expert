import { useAppSelector } from "../../store/hooks";
import CheckoutSummary from "./CheckoutSummary";
import PlanItem from "./PlanItem";
import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import ShippingItem from "./ShippingItem";
import { cameras as cameraCatalog } from "../../data/cameras";
import { protections as protectionCatalog } from "../../data/protections";
import { sensors as sensorCatalog } from "../../data/sensors";
import type { ReviewItemType } from "../../types/reviewSection";

const Checkout = () => {
  const cameras = useAppSelector((state) => state.bundle.cameras);
  const protections = useAppSelector((state) => state.bundle.protections);
  const sensors = useAppSelector((state) => state.bundle.sensors);

  const selectedCameras = cameras
    .map((selected): ReviewItemType | null => {
      const camera = cameraCatalog.find((item) => item.id === selected.id);
      if (!camera) return null;
      return {
        id: camera.id,
        name: camera.name,
        image: camera.mainImage,
        quantity: selected.quantity,
        price: `$${camera.price.toFixed(2)}`,
        oldPrice: `$${camera.oldPrice.toFixed(2)}`,
      };
    })
    .filter((item): item is ReviewItemType => item !== null);

  const selectedSensors = sensors
    .map((selected): ReviewItemType | null => {
      const sensor = sensorCatalog.find((item) => item.id === selected.id);
      if (!sensor) return null;
      return {
        id: sensor.id,
        name: sensor.name,
        image: sensor.image,
        quantity: selected.quantity,
        price: sensor.price,
        oldPrice: sensor.oldPrice,
      };
    })
    .filter((item): item is ReviewItemType => item !== null);

  const selectedProtections = protections
    .map((selected): ReviewItemType | null => {
      const protection = protectionCatalog.find(
        (item) => item.id === selected.id,
      );
      if (!protection) return null;
      return {
        id: protection.id,
        name: protection.name,
        image: "/icons/Group 1418.png",
        quantity: selected.quantity,
        price: protection.price,
        oldPrice: protection.oldPrice,
        showQuantityControl: false,
      };
    })
    .filter((item): item is ReviewItemType => item !== null);

  return (
    <aside className="md:p-4 w-full">
      <div className="bg-[#EDF4FF] border-t lg:border-t-0 px-5 py-2 md:px-4 md:py-4 md:rounded-xl">
        <ReviewHeader />
        <div>
          <div>
            {selectedCameras.length > 0 && (
              <ReviewSection title="Cameras" items={selectedCameras} />
            )}
            {selectedSensors.length > 0 && (
              <ReviewSection title="Sensors" items={selectedSensors} />
            )}
            {selectedProtections.length > 0 && (
              <ReviewSection title="Protections" items={selectedProtections} />
            )}
          </div>
          <PlanItem />
          {selectedCameras.length > 0 && <ShippingItem />}
          <CheckoutSummary />
        </div>
      </div>
    </aside>
  );
};

export default Checkout;
