import { Route, Routes } from "react-router-dom";
import LayoutMain from "./layout/LayoutMain";

import LayoutProduct from "./layout/LayoutProduct";
import IndexPage from "./pages/IndexPage";
import AboutProductPage from "./pages/AboutProductPage";

import Cursor from "./components/Cursor";

import { ProductsProvider } from "./context/ProductsContext";

export default function App() {
  return (
    <ProductsProvider>
      
      <Cursor />

      <Routes>
        <Route element={<LayoutMain />}>
          <Route element={<IndexPage />} path="/" />
        </Route>
        <Route element={<LayoutProduct />}>
          <Route element={<AboutProductPage />} path="/about/:id" />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}
