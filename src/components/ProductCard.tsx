import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


export default function ProductCard({ image }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      key={image.id}
      className="flex-shrink-0"
    >
      <NavLink to={`/about/${image.id}`}>
        <motion.img
          src={image.profilePicture}
          alt={`Project ${image.id}`}
          className="rounded-3xl w-[38vh] h-[38vh] object-cover transition-transform duration-500 ease-in-out transform hover:translate-x-8 hover:z-10 hover:relative"
          layout
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
        />
      </NavLink>
    </motion.div>
  );
}