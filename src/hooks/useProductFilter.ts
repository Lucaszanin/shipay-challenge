import { useState, useMemo, useEffect } from "react";
import type { ProductItemProps } from "../components/ProductItem/ProductItem.types";
import { filterProducts } from "../utils/filterProducts";

export const useProductFilter = (
  products: ProductItemProps[],
  debounceMs = 300,
) => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [search, debounceMs]);

  const filteredProducts = useMemo(() => {
    return filterProducts({ products, searchTerm: debouncedSearch });
  }, [products, debouncedSearch]);

  return {
    search,
    setSearch,
    filteredProducts,
  };
};
