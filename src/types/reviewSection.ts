export type ReviewItemType = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: string;
  oldPrice?: string;
  free?: boolean;
};

export type ReviewSectionProps = {
  title: string;
  items: ReviewItemType[];
};
