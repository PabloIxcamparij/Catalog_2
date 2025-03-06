import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import { images } from "../data/imagenes.ts";
  
  type ProductsContextType = {
    selectedItem: string;
    setSelectedItem: (item: string) => void;
    filteredImages: typeof images;
    rows: (typeof images)[];
    isTransitioning: boolean;
    searchInformation: (id: number) => typeof images[number][];
  };
  
  const ProductsContext = createContext<ProductsContextType | undefined>(
    undefined
  );
  
  export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [selectedItem, setSelectedItem] = useState("Todo");
    const [filteredImages, setFilteredImages] = useState(images);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [rows, setRows] = useState<(typeof images)[]>([]);
  
    // Filter images & set transition
    useEffect(() => {
      setIsTransitioning(true);
  
      const newImages =
        selectedItem === "Todo"
          ? images
          : images.filter((image) => image.category === selectedItem);
  
      setFilteredImages(newImages);
  
      setIsTransitioning(false);
    }, [selectedItem]);
  
    // Number of rows
    useEffect(() => {
      const newRows = [
        filteredImages.slice(0, Math.ceil(filteredImages.length / 2)),
  
        filteredImages.slice(
          Math.ceil(filteredImages.length / 2),
          Math.ceil(filteredImages.length / 2) * 2
        ),
  
        filteredImages.slice(Math.ceil(filteredImages.length / 2) * 2),
      ];
  
      setRows(newRows);
    }, [filteredImages]);
  
    function searchInformation(id: number) {
      const result = images.find((image) => image.id === id);
      return result ? [result] : [];
    }
  
    return (
      <ProductsContext.Provider
        value={{
          selectedItem,
          setSelectedItem,
          filteredImages,
          rows,
          isTransitioning,
          searchInformation,
        }}
      >
        {children}
      </ProductsContext.Provider>
    );
  };
  
  export const useProduct = () => {
    const context = useContext(ProductsContext);
    if (!context) {
      throw new Error("useProduct must be used within a ProductsProvider");
    }
    return context;
  };
  