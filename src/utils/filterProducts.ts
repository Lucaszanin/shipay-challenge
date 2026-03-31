import type * as T from "./filterProducts.types";

export const filterProducts = ({
  products,
  searchTerm,
}: T.FilterProductsProps): T.FilterProductsReturn => {
  const normalized = searchTerm.trim().toLowerCase();

  if (!normalized) return products;

  return products.filter((product) =>
    product.productName.toLowerCase().includes(normalized),
  );
};
