import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutProduct from "./pages/AboutProduct";
import LayoutMain from "./layout/LayoutMain";

export default function App() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route element={<Home />} path="/"></Route>
        <Route element={<AboutProduct />} path="/about"></Route>

      </Route>
    </Routes>
  );
}
