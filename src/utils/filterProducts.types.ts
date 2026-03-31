import type { ProductItemProps } from "../components/ProductItem/ProductItem.types";

export type FilterProductsProps = {
  products: ProductItemProps[];
  searchTerm: string;
};

export type FilterProductsReturn = ProductItemProps[];
