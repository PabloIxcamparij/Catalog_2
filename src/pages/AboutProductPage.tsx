import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";

export default function AboutProductPage() {
  const { searchInformation } = useProduct();
  const { id }: any = useParams();
  const product = searchInformation(parseInt(id));

  if (!product.length) {
    return <p className="text-center text-2xl">Producto no encontrado</p>;
  }

  return (
    <div className="max-w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-0">
      
      <div
      className="md:ml-[8vh] lg:ml-[13vh] relative w-[100%] h-[60vh] lg:w-[50%] lg:h-[80vh] overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth p-3 stylish-scroll">
        {product[0].pictures?.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center snap-center"
          >
            <img
              src={image}
              alt={product[0].name}
              className="rounded-lg w-[80%] h-full object-cover shadow-lg"
            />
          </div>
        ))}
      </div>

      <div className="md:ml-[8vh] w-[80%] lg:w-[50%] text-center p-2 mb-[3vh]">
        <h1 className="text-4xl sm:text-6xl font-bold">{product[0].name}</h1>

        <div className="w-full border border-black my-4" />

        <div className="flex flex-col w-full md:grid grid-cols-1 md:grid-cols-2 gap-5 text-lg sm:text-2xl text-left">
          <p>
            <strong>Categoría:</strong> {product[0].category}
          </p>
          <p>
            <strong>Dimensiones:</strong> {product[0].dimensions}
          </p>
          <p>
            <strong>Material:</strong> {product[0].material}
          </p>
          <p className="col-span-2">
            <strong>Descripción:</strong> {product[0].description}
          </p>
          <p className="col-span-2">
            <strong>Recomendaciones:</strong> {product[0].recommendations}
          </p>
        </div>
      </div>
    </div>
  );
}
