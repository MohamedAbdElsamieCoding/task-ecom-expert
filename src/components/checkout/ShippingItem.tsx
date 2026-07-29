import Border from "../Border";

const ShippingItem = () => {
  return (
    <div className="mt-2 flex flex-col">
      <Border />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <img src="/icons/carbon_delivery.png" alt="icon" />
          <p className="font-medium text-xs text-[#0B0D10]">Fast Shipping</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-medium text-xs text-gray-600">$5.99</p>
          <p className="uppercase text-primary text-xs font-semibold">Free</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingItem;
