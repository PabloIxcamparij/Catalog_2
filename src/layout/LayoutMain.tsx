import { BarMenu } from "../components/BarMenu";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function LayaoutMain() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-[hsl(0,0%,90%)]">
      <header
        className={`
          flex border-black transition-all duration-500 ease-in-out transform
          ${
            isHome
              ? "fixed left-0 top-0 h-full w-14 items-center justify-center border-r"
              : "md:fixed md:left-0 md:top-0 md:h-full md:w-14 items-center justify-center md:border-r w-full h-[10vh] border-b"

          }
        `}
      >
        <Header />
      </header>

      <main
      className={`
      ${isHome ? " ml-[8vh] md:ml-0" : ""}
      flex flex-col items-center justify-center gap-5 flex-grow`}
      >
        <Outlet />
      </main>

      <footer className={isHome ? "flex ml-[8vh] md:ml-0 " : "hidden"}>
        <BarMenu />
      </footer>
    </div>
  );
}
