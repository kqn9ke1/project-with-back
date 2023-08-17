export type CategoryType = {
  id: number;
  title: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  categories: CategoryType;
};
