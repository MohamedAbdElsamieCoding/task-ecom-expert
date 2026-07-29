type QuantityControlProps = {
  quantity: number;
};

const QuantityControl = ({ quantity }: QuantityControlProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-lg text-[#0B0D10]"
      >
        -
      </button>

      <span className="w-3 text-center font-semibold text-sm">{quantity}</span>

      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-lg text-[#0B0D10]"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
