import styled from "styled-components";

export const ProductsStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    max-width: 1368px;
    @media (max-width: 768px){
        flex-direction: column;
        box-sizing: border-box;
        overflow-y: scroll;
        max-height: 400px;
    }
`;