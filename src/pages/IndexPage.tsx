import { motion, AnimatePresence } from "framer-motion";
import { useProduct } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function IndexPage() {
  const { rows, isTransitioning } = useProduct();

  return (
    <div className="ml-[2vh] sm:ml-[12vh] h-full flex items-center justify-center">
      <div
        className="ml-[2.2vh] mr-[2.2vh] mb-[2vh] w-full h-[80vh] overflow-x-scroll overflow-y-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-col gap-4 ">
          {!isTransitioning &&
            rows.map((row, rowIndex) => (

              <motion.div 
              layout 
              key={rowIndex} 
              className="flex gap-4"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >                
                <AnimatePresence>
                  {row.map((image, index) => (
                    <ProductCard image={image} key={index} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
