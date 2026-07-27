export type CameraCardProps = {
  camera: {
    id: number;
    name: string;
    description: string;
    oldPrice: number;
    price: number;
    discount: number;
    learnMore: string;
    mainImage: string;
    colors: {
      id: number;
      name: string;
      image: string;
    }[];
  };
};
