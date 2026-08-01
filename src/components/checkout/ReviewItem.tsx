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
    showQuantityControl?: boolean;
  };
};

const ReviewItem = ({ item }: ReviewItemProps) => {
  const {
    image,
    name,
    quantity,
    price,
    oldPrice,
    free,
    showQuantityControl = true,
  } = item;

  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          {/* Image */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white">
            <img
              src={image}
              alt={name}
              className="max-h-8 max-w-8 object-contain"
            />
          </div>

          {/* Product name */}
          <p className="text-sm">{name}</p>
        </div>
        {showQuantityControl && (
          <QuantityControl id={item.id} quantity={quantity} />
        )}
      </div>
      {/* Price */}
      <div className="flex flex-col items-center">
        {oldPrice && (
          <p className="text-gray-600 font-medium text-xs line-through">
            {oldPrice}
          </p>
        )}

        <p className="text-primary font-semibold text-xs">
          {free ? "FREE" : price}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
