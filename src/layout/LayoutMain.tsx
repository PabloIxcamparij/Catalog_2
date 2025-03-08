import { BarMenu } from "../components/BarMenu";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function LayaoutMain() {
  return (
    <div className="flex flex-col min-h-screen bg-[hsl(0,0%,90%)]">
      <header className="hidden md:flex fixed left-0 top-0 h-full w-14 items-center justify-center border-r border-black">
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center gap-5 flex-grow">
        <Outlet />
      </main>

      <footer>
        <BarMenu />
      </footer>
    </div>
  );
}
