import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const ModalStyled = styled(Modal)`
    overflow-x: scroll;
    width: 375px;
    margin-left: 20px;
    margin-top: 80px;
    svg {
        cursor: pointer;
        color: #ffffff;
        font-size: 18px;
    }
    .headerModal {
        display: flex;
        height: 54px;
        background-color: #27ae60;
        justify-content: space-between;
        align-items: center;
        padding: 13px 22px;
        border-radius: 5px 5px 0 0;
    }
    #modal-modal-title {
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
    }
    ul {
        background-color: #ffffff;
        padding: 50px 20px;
        border-radius: 0 0 5px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style:  none;
        border-bottom: 2px solid #e0e0e0;
    }
    h4 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 18px;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        color: #828282;
    }
    img {
        width: 100px;
        height: 100px;
    }
    .itemOnCart {
        width: 120px;
        height: 110px;
        background-color: #e0e0e0;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trash {
        width: 15px;
        font-weight: 900;
        font-size: 18px;
        color: #bdbdbd;
    }
    li {
        display: flex;
        align-items: flex-start;
        padding-bottom: 20px;
        column-gap: 50px;
    }
    .itemOff {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cart-cart {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .total {
        bakcground-color: #ffffff;
        display: flex;
        padding: 30px;
        justify-content: space-between;
    }
    .total-name {
        color: #333333;
        font-size: 14px;
        font-weight: 600;
    }
    .total-valor {
        font-weight: 600;
        font-size: 16px;
        color: #828282;
    }

    @media (min-width: 768px) {
        margin-left: 40%;
    }
`

export const ButtonStyled = styled(Button)`
    span {
        background-color: #f2f2f2;
    } 
    svg, path {
        color: #eb5757;
        font-size: 16px;
        z-index: 1;
    }
`
export const BoxStyled = styled(Box)`
    background-color: #ffffff;
    width: 335px;
    border-radius: 5px;
`;