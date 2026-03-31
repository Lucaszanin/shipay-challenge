import { ProductItem } from "../ProductItem/ProductItem";
import type * as T from "./ProductList.types";
import * as S from "./ProductList.styles";

export const ProductList = ({ products }: T.ProductListProps) => {
  if (!products.length) {
    return <S.EmptyMessage>Nenhum produto encontrado</S.EmptyMessage>;
  }

  return (
    <S.List>
      {products?.map(({ id, productName }) => (
        <ProductItem key={id} productName={productName} id={id} />
      ))}
    </S.List>
  );
};
