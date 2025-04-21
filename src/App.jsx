import Header from "./pages/Header";
import ProductList from "./pages/ProductList";
import { CartProvider } from "./pages/CartContent";
function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductList />
      </CartProvider>
    </>
  );
}

export default App;
