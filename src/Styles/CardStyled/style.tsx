import styled from "styled-components";
import Card from '@mui/material/Card';

export const CardStyled = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    margin: 10px;
    h5 {
        color: #333333;
        font-weight: 700;
        font-size: 18px;
        margin-top: 26.67px;
        margin-bottom: 14px;
    }
    img {
        width: 177px;
    }
    :hover {
        border: 2px solid #27ae60;
    }
    p {
        font-weight: 400;
        font-size: 12px;
        color: #828282;
        margin-bottom: 14px;
    }
    span {
        color: #27ae60;
        font-weight: 600;
        font-size: 14px;
    }
    .img {
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        height: 150px;
    }
`