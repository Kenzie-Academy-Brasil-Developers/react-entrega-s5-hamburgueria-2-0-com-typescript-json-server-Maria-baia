import { useProducts } from "../../Providers/Products";
import { CardStyled } from "../../Styles/CardStyled/style";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import { ButtonGrey } from "../../Styles/ButtonGrey/style";
import { useCart } from "../../Providers/Cart";
import { useAuth } from "../../Providers/Auth";
import { ProductsStyled } from "../Products/style";

interface FilteredProductsProps {
    input: string;
}

const FilteredProducts = ({input}: FilteredProductsProps) => {
    const {products} = useProducts();
    const {addProduct} = useCart();
    const {userId} = useAuth();

    const add = (img: string, name: string, price: number, id: number) => {
        const onCart = {userId: userId,
            img: img,
            name: name,
            price: price,
            id: id};
            
        addProduct(onCart);
    }
    return (
        <ProductsStyled>
            {products.filter((result) => result.name.toLowerCase().includes(input.toLowerCase()))
            .map((product) => 
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
            )}
        </ProductsStyled>
    );
};

export default FilteredProducts;