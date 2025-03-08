import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex md:flex-col justify-around items-center w-full h-full">
      <NavLink to={"/"} className="md:rotate-[-90deg] font-semibold text-2xl ">
        Logo
      </NavLink>

      <h1 className="md:rotate-[-90deg] text-2xl font-semibold whitespace-nowrap">
        Arbol de vida
      </h1>
    </div>
  );
}
