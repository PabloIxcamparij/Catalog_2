import { NavLink, Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <div>
      LayoutMain
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}> About Product</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
