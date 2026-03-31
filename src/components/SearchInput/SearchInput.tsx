import * as S from "./SearchInput.styles";
import type * as T from "./SearchInput.types";

export const SearchInput = ({ value, onChange }: T.SearchInputProps) => (
  <S.Input
    type="text"
    placeholder="Filtrar produtos"
    value={value}
    onChange={(e) => onChange(e?.target?.value)}
  />
);
