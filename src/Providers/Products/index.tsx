import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import axios from "axios";

interface Products {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
};

interface ProductsProps {
    children: ReactNode;
};

interface ProductsProviderData {
    products: Products[];
};

const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData);

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }: ProductsProps) => {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() =>{
        axios.get("https://json-server-hamburgueria2.herokuapp.com/foods")
        .then(response => setProducts(response.data))
        .catch(err => console.error(err))
    });

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};