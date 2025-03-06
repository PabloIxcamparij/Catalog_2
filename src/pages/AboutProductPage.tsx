import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";

export default function AboutProductPage() {
  const { searchInformation } = useProduct();
  // Capturamos el id de la URL
  const { id }: any = useParams();

  const product = searchInformation(parseInt(id));

  return (
    <div className="w-ful flex flex-col items-center space-y-4 p-4">
      <div key={product[0].id} className="flex-shrink-0">
        <img
          src={product[0].src}
          alt={`Project ${product[0].id}`}
          className="rounded-3xl w-[100%] h-[100%] object-cover"
        />
      </div>

      <h1>Hola, el ID del producto es: {id}</h1>
    </div>
  );
}
