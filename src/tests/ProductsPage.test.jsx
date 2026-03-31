import { render, screen, fireEvent } from "@testing-library/react"
import ProductsPage from "../pages/ProductsPage"
import { productsMock } from "../mocks/productsMock"

describe("ProductsPage", () => {

  test("filters products when user types", () => {

    render(<ProductsPage items={productsMock} />)

    const input = screen.getByPlaceholderText("Filtrar produtos")

    fireEvent.change(input, {
      target: { value: "pix" }
    })

    expect(screen.getByText("Pix")).toBeInTheDocument()

  })

})
