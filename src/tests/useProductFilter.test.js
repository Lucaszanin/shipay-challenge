import { renderHook, act } from "@testing-library/react";
import { useProductFilter } from "../hooks/useProductFilter";
import { productsMock } from "../mocks/productsMock";

describe("useProductFilter", () => {
  test("updates filtered products when search changes", () => {
    const { result } = renderHook(() => useProductFilter(productsMock));

    act(() => {
      result.current.setSearch("pix");
    });

    expect(result.current.filteredProducts).toEqual([{ id: 1, name: "Pix" }]);
  });
});
