import { RiShoppingBag3Line } from "react-icons/ri";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { StyledPaper } from "./style";
import MaskGroup from "../../Assets/MaskGroup.png";
import Headline from "../../Assets/Headline.png";
import { Title } from "../../Styles/Title/style";

const HeaderLogin = () => {
    return(
        <>
        <Paper elevation={0}>
            <Title>
                <img src={MaskGroup} alt="BurguerKenzie"/>
            </Title>
            <StyledPaper variant='outlined'>
                <Box><RiShoppingBag3Line/></Box>
                <img src={Headline} alt="description"/>
            </StyledPaper>
        </Paper>
        </>
    );
};

export default HeaderLogin;