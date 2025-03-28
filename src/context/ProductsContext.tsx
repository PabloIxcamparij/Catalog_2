import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { productType, productPictureType } from "../types/index.ts";
import { supabase } from "../supabaseClient";

type ProductsContextType = {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  filteredImages: productType[];
  isTransitioning: boolean;
  selectedProduct: productType | null;
  productPictures: productPictureType[];
  fetchProductData: (id: number) => Promise<void>;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState("Todo");
  const [products, setProducts] = useState<productType[]>([]);
  const [filteredImages, setFilteredImages] = useState<productType[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<productType | null>(null);
  const [productPictures, setProductPictures] = useState<productPictureType[]>([]);

  // Get List Products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select("id, name, purpose, material, dimensions, description, recommendations, profilePicture, category");

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
        setFilteredImages(data);
      }
    };

    fetchProducts();
  }, []);

  // Filtered Products according to category
  useEffect(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setFilteredImages(
        selectedItem === "Todo"
          ? products
          : products.filter((product) => product.category === selectedItem)
      );
      setIsTransitioning(false);
    }, 300);
  }, [selectedItem, products]);

  // Function to fetch product data
  async function fetchProductData(id: number) {
    await searchProduct(id);
  }

  // Search product by ID
  async function searchProduct(id: number) {
    const result = products.find((product) => product.id === id);
    setSelectedProduct(result || null);
  }

  // Fetch product pictures
  async function fetchProductPictures(id: number) {
    const { data, error } = await supabase
      .from("ProductPictures")
      .select("id, idProduct, urlPicture")
      .eq("idProduct", id);

    if (error) {
      console.error("Error fetching product pictures:", error);
    } else {
      setProductPictures(data);
    }
  }

  // useEffect to check when selectedProduct updates
  useEffect(() => {
    if (selectedProduct) {      
      // Once selectedProduct is updated, fetch product pictures
      fetchProductPictures(selectedProduct.id);
    }
  }, [selectedProduct]); // Executes whenever selectedProduct changes

  return (
    <ProductsContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        filteredImages,
        isTransitioning,
        selectedProduct,
        productPictures,
        fetchProductData,
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
