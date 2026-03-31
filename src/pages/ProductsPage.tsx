import * as T from "./ProductsPage.types";
import { ProductList } from "../components/ProductList/ProductList";
import { SearchInput } from "../components/SearchInput/SearchInput";

import * as S from "./ProductsPage.styles";
import { useProductFilter } from "../hooks/useProductFilter";

export const ProductsPage = ({ items }: T.ProductsPageProps) => {
  const { search, setSearch, filteredProducts } = useProductFilter(items);

  return (
    <S.Page>
      <S.Container>
        <S.Title>Produtos Shipay</S.Title>

        <SearchInput value={search} onChange={setSearch} />

        <ProductList products={filteredProducts} />
      </S.Container>
    </S.Page>
  );
};
