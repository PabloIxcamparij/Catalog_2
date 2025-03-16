import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";
import { useEffect, useState } from "react";

export default function AboutProductPage() {
  const { fetchProductData, selectedProduct, productPictures } = useProduct();
  const { id }: any = useParams();
  
  // Estado de carga del carrusel
  const [loadingCarousel, setLoadingCarousel] = useState(true);

  useEffect(() => {
    // Trigger fetchProductData when id changes
    fetchProductData(parseInt(id));
  }, [id, fetchProductData]);


  // Time to allow images to load
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoadingCarousel(false);
    }, 800);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (!selectedProduct || productPictures.length === 0) {
    return <p className="text-center text-2xl">Buscando producto</p>;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center sm:gap-0">

      <div className="text-center md:ml-[5vh] lg:ml-[12vh] w-[80%] lg:w-[50%] mb-[4vh] mt-[4vh]">
        
        <h1 className="text-4xl sm:text-6xl font-bold">{selectedProduct.name}</h1>
        <div className="w-full border border-black my-4" />
        <div className="flex flex-col w-full md:grid grid-cols-1 md:grid-cols-2 gap-5 text-lg sm:text-2xl text-left">
          <p><strong>Categoría:</strong> {selectedProduct.category}</p>
          <p><strong>Dimensiones:</strong> {selectedProduct.dimensions}</p>
          <p><strong>Material:</strong> {selectedProduct.material}</p>
          <p className="col-span-2"><strong>Descripción:</strong> {selectedProduct.description}</p>
          <p className="col-span-2"><strong>Recomendaciones:</strong> {selectedProduct.recommendations}</p>
        </div>
      </div>

            
      <div className="mb-8 md:ml-[5vh] lg:ml-0 relative max-w-screen h-[60vh] lg:w-[50%] lg:h-[80vh] overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory p-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {loadingCarousel ? (
          
          <div className="w-full h-full flex justify-center items-center gap-10">
              <span className="block w-4 h-4 rounded-full bg-gray-500 animate-loading02"></span>
              <span className="block w-4 h-4 rounded-full bg-gray-500 animate-loading02 delay-200"></span>
              <span className="block w-4 h-4 rounded-full bg-gray-500 animate-loading02 delay-400"></span>
          </div>

        ) : (
          productPictures.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex justify-center items-center snap-center"
            >
              <img
                src={image.urlPicture}
                alt={selectedProduct.name}
                className="bg-black p-1 rounded-4xl w-[80%] h-full object-cover shadow-lg"
              />
            </div>
          ))
        )}
      </div>

      <style>
        {`
          @keyframes loading02 {
            0% {
              filter: blur(0);
              opacity: 1;
            }
            100% {
              filter: blur(5px);
              opacity: .2;
            }
          }

          .animate-loading02 {
            animation: loading02 1.2s infinite alternate;
          }

          .animate-loading02:nth-child(2) {
            animation-delay: 0.2s;
          }

          .animate-loading02:nth-child(3) {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );
}
