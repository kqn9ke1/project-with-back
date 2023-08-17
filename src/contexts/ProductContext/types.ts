import { CategoryType, ProductType } from "../../models/product";

export type initStateProductsType = {
  products: ProductType[];
  oneProduct: ProductType | null;
  categories: CategoryType[];
};

export type ProductContextType = initStateProductsType & {
  getProducts: () => void;
};

type ProductsAction = {
  type: "products";
  payload: ProductType[];
};

type OneProductAction = {
  type: "oneProduct";
  payload: ProductType;
};

type CategoryAction = {
  type: "categories";
  payload: CategoryType[];
};

export type ActionType = ProductsAction | OneProductAction | CategoryAction;
