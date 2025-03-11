import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function LayoutProduct() {
  return (
    <motion.div 
    layout
    initial={{ opacity: 1, }}
    animate={{ opacity: 2, }}
    exit={{ opacity: 1, }}
    transition={{ type: "spring", damping: 5, duration: 2 }}
   
    
    className="flex flex-col min-h-screen bg-[hsl(0,0%,90%)]">
     
      <header className="flex h-[8vh] w-full items-center justify-center border-b border-black md:border-r md:w-14 md:h-full md:fixed md:left-md:0 top-0">
        <Header />
      </header>

      <main className="md:ml-[4vh] lg:ml-[8vh] flex flex-col items-center justify-center gap-5 flex-grow">
        <Outlet />
      </main>
    </motion.div>
  );
}
