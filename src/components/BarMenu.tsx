import { useProduct } from "../context/ProductsContext";

export const BarMenu = () => {
  const { selectedItem, setSelectedItem } = useProduct();

  return (
    <div className="ml-[4vh] sm:ml-[15vh] mb-5">
      
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
          onClick={() => setSelectedItem("Producto")}
        >
          Productos
        </button>
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Ventas")}
        >
          Ventas
        </button>
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Items")}
        >
          Items
        </button>
        <button
          className="hover:underline"
          onClick={() => setSelectedItem("Idont")}
        >
          Idont
        </button>
      </div>
    </div>
  );
};
