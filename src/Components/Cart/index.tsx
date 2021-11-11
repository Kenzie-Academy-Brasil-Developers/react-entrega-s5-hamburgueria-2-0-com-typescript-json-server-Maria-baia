import Typography from "@mui/material/Typography";
import { useCart } from "../../Providers/Cart";
import { FaTrash } from "react-icons/fa";
import { ModalStyled, ButtonStyled, BoxStyled } from "./style";
import { AiOutlineClose, AiOutlineMinus  } from "react-icons/ai";
import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IoIosAdd } from "react-icons/io"

interface CartProps {
    open: boolean;
    handleClose: () => void;
}

const Cart = ({open, handleClose}: CartProps) => {
    const {cart, deleteProduct} = useCart();
    const [number, setNumber] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
    // const [ total, setTotal ] = useState([0]);

    const removeItem = (id: number, index: number) => {
        if(number[index] === 1) {
            deleteProduct(id);
        }else{
            number.splice(index, 1, number[index]-1);
        }
    }

    const addItem = (index: number) => {
        number.splice(index, 1, number[index]+1);
    }

    return (
        <>
            <ModalStyled open={open} aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <BoxStyled>
                    <div className="headerModal">
                        <Typography id="modal-modal-title" variant="h6"
                        component="h2">Carrinho de compras</Typography>
                        <AiOutlineClose onClick={handleClose} />
                    </div>
                    <ul>
                        {cart.length > 0 ?
                        cart.map((item, index) => (
                            <li key={index}>
                                <div className="cart-cart">
                                <div className="itemOnCart">
                                    <img src={item.img} alt={item.name}/>
                                </div>
                                <div className="itemOff">
                                    <h4>{item.name}</h4>
                                    <ButtonGroup variant="contained" size="small" color="success">
                                        <ButtonStyled onClick={() => removeItem(item.id, index)}><AiOutlineMinus/></ButtonStyled>
                                        <ButtonStyled disabled >{number[index]}</ButtonStyled>
                                        <ButtonStyled onClick={() => addItem(index)}><IoIosAdd/></ButtonStyled>
                                    </ButtonGroup>
                                </div>
                                </div>
                                <FaTrash className="trash" onClick={() => deleteProduct(item.id)}/>
                                {/* {setTotal([...total, item.price * number[index]])} */}
                            </li>
                        )):
                        <>
                            <h4>Sua sacola está vazia</h4>
                            <p>Adicione itens</p>
                        </>
                        }
                    </ul>
                            <div>
                                <p>Total</p>
                                {/* <span>{total.reduce((anterior, atual) => (
                                    atual + anterior
                                ),0)}</span> */}
                            </div>
                </BoxStyled>
            </ModalStyled>
        </>
    );
};

export default Cart;