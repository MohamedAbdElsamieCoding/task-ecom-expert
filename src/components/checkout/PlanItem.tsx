import Border from "../Border";

const PlanItem = () => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <Border />
      <h3 className="text-xs font-normal text-gray-500">
        Home monitoring plan
      </h3>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-1">
          <img src="/icons/Layer_1.png" alt="icon" />
          <p className="font-bold text-sm">
            Cam{" "}
            <strong className="font-extrabold text-sm text-primary">
              Unlimited
            </strong>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="line-through font-medium text-gray-600 text-xs">
            $12.99/mo
          </p>
          <p className="text-primary text-xs font-bold">$9.99/mo</p>
        </div>
      </div>
    </div>
  );
};

export default PlanItem;
