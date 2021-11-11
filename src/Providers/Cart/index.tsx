import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useAuth } from "../Auth";
import axios from "axios";
import { toast } from "react-toastify";

interface Product {
    userId: number;
    name: string;
    price: number;
    img: string;
    id: number;
}

interface ProductOnCart {
    userId: number;
    img: string;
    name: string;
    price: number;
}

interface CartProps {
    children: ReactNode;
}

interface CartProviderData {
    cart: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (product: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<Product[]>([]);
    const {userId} = useAuth();
    const token = (localStorage.getItem("token") || "{}");

    useEffect(() =>{
        axios.get(`https://json-server-hamburgueria2.herokuapp.com/cart?userId=${userId}`)
        .then(response => setCart(response.data))
        .catch(err => console.error(err))
    });

    const addProduct = (productToBeAdded: ProductOnCart) => {
        axios.post("https://json-server-hamburgueria2.herokuapp.com/cart", productToBeAdded, {headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(() => toast.success("Item adicionado ao carrinho!"))
        .catch(() => toast.error("Algo errado aconteceu."));
    };
    const deleteProduct = (productToBeDeleted: number) => {
        axios.delete(`https://json-server-hamburgueria2.herokuapp.com/cart/${productToBeDeleted}`,  {headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(() => toast.success("Item removido do carrinho!"))
        .catch(() => toast.error("Algo errado aconteceu."));
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
            {children}
        </CartContext.Provider>
    );
};