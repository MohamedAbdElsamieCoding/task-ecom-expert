import QuantityControl from "./QuantityControl";

type ReviewItemProps = {
  item: {
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: string;
    oldPrice?: string;
    free?: boolean;
  };
};

const ReviewItem = ({ item }: ReviewItemProps) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          {/* Image */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-8 max-w-8 object-contain"
            />
          </div>

          {/* Product name */}
          <p className="text-sm">{item.name}</p>
        </div>
        {/* Quantity */}
        <QuantityControl quantity={item.quantity} />
      </div>
      {/* Price */}
      <div className="flex flex-col items-center">
        {item.oldPrice && <p className="text-gray-600 font-medium text-xs line-through">{item.oldPrice}</p>}

        <p className="text-primary font-semibold text-xs">{item.free ? "FREE" : item.price}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
