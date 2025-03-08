import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function LayoutProduct() {
  return (
    <div className="flex flex-col min-h-screen bg-[hsl(0,0%,90%)]">
     
      <header className="flex h-[8vh] w-full items-center justify-center border-b border-black md:border-r md:w-14 md:h-full md:fixed md:left-md:0 top-0">
        <Header />
      </header>

      <main className="md:ml-[4vh] lg:ml-[8vh] flex flex-col items-center justify-center gap-5 flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
