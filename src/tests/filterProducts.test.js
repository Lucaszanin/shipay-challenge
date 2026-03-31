import { filterProducts } from "../utils/filterProducts"
import { productsMock } from "../mocks/productsMock"

describe("filterProducts", () => {

  test("returns all products when search is empty", () => {
    const result = filterProducts(productsMock, "")
    expect(result).toHaveLength(4)
  })

  test("filters products correctly", () => {
    const result = filterProducts(productsMock, "pix")
    expect(result).toEqual([{ id: 1, name: "Pix" }])
  })

  test("is case insensitive", () => {
    const result = filterProducts(productsMock, "CRÉDITO")
    expect(result).toEqual([{ id: 2, name: "Cartão de Crédito" }])
  })

})
