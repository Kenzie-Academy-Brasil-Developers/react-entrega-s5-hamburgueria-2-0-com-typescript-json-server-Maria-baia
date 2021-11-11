import { ButtonGrey } from "../../Styles/ButtonGrey/style";
import { useAuth } from "../../Providers/Auth";
import { useCart } from "../../Providers/Cart";
import { useProducts } from "../../Providers/Products";
import React, { SetStateAction } from "react";
import Cart from "../../Components/Cart";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import { CardStyled } from "../../Styles/CardStyled/style";
import { ProductsStyled } from "./style";

interface ProductsProps {
    open: boolean;
    setOpen:  React.Dispatch<SetStateAction<boolean>>;
}

const Products = ({open, setOpen}: ProductsProps) => {
    const {userId} = useAuth();
    const {addProduct} = useCart();
    const {products} = useProducts();
    
    const add = (img: string, name: string, price: number, id: number) => {
        const onCart = {userId: userId,
            img: img,
            name: name,
            price: price,
            id: id};
            
        addProduct(onCart);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <ProductsStyled>
            {products.map((product) => (
                <CardStyled key={product.id}>
                 <div>
                   <div className="img">
                    <CardMedia
                     component="img"
                     image={product.img}
                     alt={product.name}
                    />
                    </div>
                   <CardContent>
                     <h5>
                        {product.name}
                     </h5>
                     <p>
                       {product.category}
                     </p>
                     <span>
                       R$ {product.price}.00
                     </span>
                   </CardContent>
                 </div>
                 <CardActions>
                    <ButtonGrey onClick={() => add(product.img, product.name, product.price, product.id)}>Adicionar</ButtonGrey>
                 </CardActions>
               </CardStyled>
            ))}
            <Cart open={open} handleClose={handleClose}/>
        </ProductsStyled>
    );
};

export default Products;