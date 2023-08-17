import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { ActionType, ProductContextType, initStateProductsType } from "./types";
import $axios from "../../utils/axios";
import { BASE_URL } from "../../utils/consts";

const productContext = createContext<ProductContextType | null>(null);

export const useProductContext = (): ProductContextType => {
  return useContext(productContext) as ProductContextType;
};

type ProductPropsType = {
  children: ReactNode;
};

const initState = {
  products: [],
  oneProduct: null,
  categories: [],
};

const reducer = (state: initStateProductsType, action: ActionType) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "oneProduct":
      return { ...state, oneProduct: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
const ProductContext: FC<ProductPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProducts = async () => {
    try {
      const { data } = await $axios.get(`${BASE_URL}/products/`);

      console.log(data);

      dispatch({
        type: "products",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    categories: state.categories,
    getProducts,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
