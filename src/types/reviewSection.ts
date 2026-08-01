export type ReviewItemType = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: string;
  oldPrice?: string;
  free?: boolean;
  showQuantityControl?: boolean;
};

export type ReviewSectionProps = {
  title: string;
  items: ReviewItemType[];
};
