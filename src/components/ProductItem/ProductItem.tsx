import type * as T from "./ProductItem.types";
import * as S from "./ProductItem.styles";

export const ProductItem = ({ id, productName }: T.ProductItemProps) => (
  <S.ItemList>
    {id} - {productName}
  </S.ItemList>
);
