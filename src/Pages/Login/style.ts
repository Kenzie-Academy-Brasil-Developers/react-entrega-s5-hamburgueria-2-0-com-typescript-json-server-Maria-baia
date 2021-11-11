import styled from "styled-components";

export const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 1024px){
        flex-direction: row-reverse;
        justify-content: center;
        column-gap: 53px;
        margin-top: 98px;
    }
`