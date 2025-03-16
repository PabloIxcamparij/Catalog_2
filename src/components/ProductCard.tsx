import { NavLink } from "react-router-dom";
import { productType } from "../types";

interface ProductCardProps {
  product: productType;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[45vh] h-full flex-shrink-0 bg-white/70 p-4 rounded-4xl">
      <NavLink to={`/about/${product.id}`}>
        <img
          src={product.profilePicture}
          className="object-cover w-full h-[85%] rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-95"
        />
        <div className="mt-5">
          <h1 className="text-xl font-semibold"> {product.name}</h1>
          <h1 className="text-gray-800"> {product.purpose} </h1>
        </div>
      </NavLink>
    </div>
  );
}