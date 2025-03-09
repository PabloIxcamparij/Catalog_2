import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";
import { useEffect } from "react";

export default function AboutProductPage() {
  const { fetchProductData, selectedProduct, productPictures } = useProduct();
  const { id }: any = useParams();

  useEffect(() => {
    fetchProductData(parseInt(id));
  }, );

  if (!selectedProduct) {
    return <p className="text-center text-2xl">Producto no encontrado</p>;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center sm:gap-0">
      
      <div className="relative max-w-screen h-[60vh] lg:w-[50%] lg:h-[80vh]
      overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory p-3"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {productPictures.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center snap-center"
          >
            <img
              src={image.urlPicture}
              alt={selectedProduct.name}
              className="bg-black p-2 rounded-4xl w-[80%] h-full object-cover shadow-lg"
            />
          </div>
        ))}
      </div>

      <div className="text-center md:ml-[8vh] md:mr-[4vh] lg:ml-0 w-[80%] lg:w-[50%] mb-[3vh]">
        <h1 className="text-4xl sm:text-6xl font-bold">{selectedProduct.name}</h1>

        <div className="w-full border border-black my-4" />

        <div className="flex flex-col w-full md:grid grid-cols-1 md:grid-cols-2 gap-5 text-lg sm:text-2xl text-left">
          <p>
            <strong>Categoría:</strong> {selectedProduct.category}
          </p>
          <p>
            <strong>Dimensiones:</strong> {selectedProduct.dimensions}
          </p>
          <p>
            <strong>Material:</strong> {selectedProduct.material}
          </p>
          <p className="col-span-2">
            <strong>Descripción:</strong> {selectedProduct.description}
          </p>
          <p className="col-span-2">
            <strong>Recomendaciones:</strong> {selectedProduct.recommendations}
          </p>
        </div>
      </div>
    </div>
  );
}
