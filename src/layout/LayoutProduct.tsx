import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function LayoutProduct() {
  return (
    <div className="flex flex-col h-screen bg-[hsl(0,0%,90%)]">

      <Header />
      
      <main className="flex flex-col items-center justify-center gap-5 flex-grow">
        <Outlet />
      </main>

    </div>
  );
}
