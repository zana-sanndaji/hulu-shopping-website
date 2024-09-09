import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import api from "../configs/api";

const ProductContext = createContext();

function ProduactsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fethcProducts = async () => {
      try {
        setProducts(await api.get("products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fethcProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products.data;
};

const useProductDetails = (id) => {
  let products = useContext(ProductContext);
  products = products.data;
  const result = products?.find((product) => product.id === id);
  return result;
};

export default ProduactsProvider;
export { useProducts, useProductDetails };
