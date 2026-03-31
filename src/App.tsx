import { productsMock } from "./mocks/productsMock";
import { ProductsPage } from "./pages/ProductsPage";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ProductsPage items={productsMock} />
    </>
  );
}

export default App;
