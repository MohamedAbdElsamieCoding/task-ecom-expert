import Border from "../Border";

const CheckoutSummary = () => {
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
              $238.81
            </p>
            <p className="text-2xl text-primary font-bold">$187.89</p>
          </div>
        </div>
      </div>
      <p className="text-secondary font-semibold text-xs text-center pt-2.5">
        Congrats! You’re saving <strong> $50.92</strong> on your security
        bundle!
      </p>
      <button className="w-full px-4 py-3 bg-primary font-bold text-white rounded-sm text-center">
        Checkout
      </button>
      <button className="underline font-normal text-xs italic text-center">Save my system for later</button>
    </div>
  );
};

export default CheckoutSummary;
