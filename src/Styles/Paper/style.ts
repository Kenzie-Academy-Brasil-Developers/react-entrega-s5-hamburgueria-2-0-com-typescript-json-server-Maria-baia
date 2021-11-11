import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const StyledPaper = styled(Paper)`
    width: 383px;
    height: 461px;
    margin-left: 13px;
    margin-top: 14px;
    background-color: #FFFFFF;
    border: 2px solid #F5F5F5;
    box-sizing: border-box;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    img {
        margin-top: 21px;
        margin-left: 19px;
        width: 52px;
    }
    .form, form {
        display: flex;
        flex-direction: column;
        align-items: center;
        .description {
            width: 250px;
        }
    }
    .MuiFormControl-root {
        width: 347px;
        margin-top: 24px;
        background-color: #f5f5f5;
        border: 2px solid #f5f5f5;
        border-radius: 8px;
    }
    .MuiButton-root {
        margin: 19px 0;
        width: 347px;
        height: 60px;
    }
`