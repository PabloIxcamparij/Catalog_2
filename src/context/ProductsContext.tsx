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
  rows: productType[][];
  isTransitioning: boolean;
  selectedProduct: productType | null;
  productPictures: productPictureType[];
  fetchProductData: (id: number) => Promise<void>;
};

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState("Todo");
  const [products, setProducts] = useState<productType[]>([]);
  const [filteredImages, setFilteredImages] = useState<productType[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rows, setRows] = useState<productType[][]>([]);

  const [selectedProduct, setSelectedProduct] = useState<productType | null>(
    null
  );
  const [productPictures, setProductPictures] = useState<productPictureType[]>(
    []
  );

  // Get List Products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select(
          "id, name, purpose, material, dimensions, description, recommendations, profilePicture, category"
        );

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
        setFilteredImages(data);
      }
    };

    fetchProducts();
  }, []);

  // FilteredI products acording category
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

  // Determine rows in indexPage
  useEffect(() => {
    if (filteredImages.length === 0) {
      setRows([]);
      return;
    }

    let newRows = [
      filteredImages.slice(0, Math.ceil(filteredImages.length / 2)),
      filteredImages.slice(
        Math.ceil(filteredImages.length / 2),
        Math.ceil(filteredImages.length / 2) * 2
      ),
      filteredImages.slice(Math.ceil(filteredImages.length / 2) * 2),
    ];

    setRows(newRows);
  }, [filteredImages]);

  // Call fuction search
  async function fetchProductData(id: number) {
    await searchProduct(id);
    await fetchProductPictures(id);
  }

  // Search product by ID
  async function searchProduct(id: number) {
    const result = products.find((product) => product.id === id);
    setSelectedProduct(result || null);
  }

  // Search imgs of product
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

  return (
    <ProductsContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        filteredImages,
        rows,
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
