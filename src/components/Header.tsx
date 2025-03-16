import { NavLink, useLocation } from "react-router-dom";
import { LeafIcon, BuyIcon } from "../assets/Icons";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`
        flex justify-between items-center w-full h-[80%] p-8
        ${isHome ? "flex-col" : "md:flex-col"}
    `}
    >
      <NavLink
        to={"/"}
        className="flex w-[50%] h-[40%] items-center justify-center transition-transform duration-300 ease-in-out transform hover:text-black/50"
      >
        <h1
          className={`flex items-center gap-8 text-2xl font-semibold whitespace-nowrap
           
            ${isHome ? "rotate-[-90deg]" : "md:rotate-[-90deg]"}
            
          `}
        >
          <LeafIcon />
          Arbol de vida

        </h1>
      </NavLink>

      <NavLink
        to={"/"}
        className="transition-transform duration-300 ease-in-out transform hover:scale-120"
      >
          <BuyIcon />
      </NavLink>
    </nav>
  );
}
