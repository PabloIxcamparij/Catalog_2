import { useProduct } from "../context/ProductsContext";

export const BarMenu = () => {
  const { selectedItem, setSelectedItem } = useProduct();

  return (
    <div className="ml-[4vh] md:ml-[10vh] lg:ml-[14vh] mb-5 md:mb-10 text-wrap">
      
      <h1 className="text-3xl sm:text-5xl font-semibold">{selectedItem}</h1>{" "}
      
      <div className="flex gap-5 mt-2">
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Todo")}
        >
          Todo
        </button>
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Decoracion")}
        >
          Decoracion
        </button>
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Estetica")}
        >
          Estetica
        </button>
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Higiene")}
        >
          Higiene
        </button>
      </div>
    </div>
  );
};
