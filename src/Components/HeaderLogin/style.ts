import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const StyledPaper = styled(Paper)`
    width: 377px;
    height: 95px;
    margin-left: 18px;
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    .MuiBox-root {
        width: 60px;
        height: 60px;
        background-color: rgba(39, 174, 96, 0.1);
        border-radius: 5px;
        svg {
            width: 24px;
            height: 24px;
            margin-left: 18px;
            margin-top: 16px;
            color: #27ae60;
        }
    }
    img {
        width: 261px;
        margin-left: 19px;
    }
`