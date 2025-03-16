import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { useRef } from "react";
import { useProduct } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function ScrollBlurEffect() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useBlurEffect(scrollXProgress);
  const { filteredImages } = useProduct();

  return (
    <div className="w-full md:max-w-[88%]">
      <motion.ul
        ref={ref}
        style={{ maskImage, scrollbarWidth: "none" }}
        className="flex gap-5 p-5 overflow-x-auto scrollbar-hide h-[80vh]"
      >
        {filteredImages.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </motion.ul>
    </div>
  );
}

function useBlurEffect(scrollXProgress : any) {
  const maskImage = useMotionValue(
    "linear-gradient(90deg, #0000, #000 5%, #000 95%, #0000)"
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    const mid = "linear-gradient(90deg, #0000, #000 5%, #000 95%, #0000)";
    animate(maskImage, value === 0 ? mid : value === 1 ? mid : mid);
  });

  return maskImage;
}
