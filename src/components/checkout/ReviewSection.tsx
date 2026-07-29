import type { ReviewSectionProps } from "../../types/reviewSection";
import Border from "../Border";
import ReviewItem from "./ReviewItem";

const ReviewSection = ({ title, items }: ReviewSectionProps) => {
  return (
    <section className="flex flex-col gap-2 mt-2 w-full">
      <Border />
      <h3 className="font-normal text-xs uppercase text-gray-500">{title}</h3>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
