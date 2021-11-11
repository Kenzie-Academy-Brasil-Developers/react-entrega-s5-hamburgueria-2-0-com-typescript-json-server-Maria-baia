import { FaSearch, FaShoppingCart, FaSignOutAlt  } from "react-icons/fa";
import { HeaderDashboardStyle, Icons, TextFieldStyled } from "./style";
import React, { useState, SetStateAction } from "react";
import { useAuth } from "../../Providers/Auth";
import MaskGroup from "../../Assets/MaskGroup.png";
import { Title } from "../../Styles/Title/style";
import Badge from '@mui/material/Badge';
import { useCart } from "../../Providers/Cart";

interface HeaderDashboardProps {
    show: boolean;
    setShow:  React.Dispatch<SetStateAction<boolean>>;
    handleOpen: () => void;
    input: string;
    setInput: React.Dispatch<SetStateAction<string>>;
}

const HeaderDashboard = ({setShow, handleOpen, input, setInput}: HeaderDashboardProps) => {
    const [open, setOpen] = useState<boolean>(true);
    const {logout} = useAuth();
    const {cart} = useCart();

    if(input.length > 0){
        setShow(false);
    }else{
        setShow(true);
    }

    return (
        <HeaderDashboardStyle open={open}>
            {open ?
            <>
                <Title>
                    <img src={MaskGroup} alt="BurguerKenzie"/>
                </Title>
                <Icons>
                    <FaSearch onClick={() => setOpen(!open)}/>
                    <Badge badgeContent={cart.length} color="success">
                        <FaShoppingCart onClick={handleOpen}/>
                    </Badge>
                    <FaSignOutAlt onClick={logout}/>
                </Icons>
            </>:
            <>
                <Title>
                    <img src={MaskGroup} alt="BurguerKenzie"/>
                </Title>
                <Icons>
                    <TextFieldStyled color="success" placeholder="Digitar pesquisa" value={input} onChange={(e) => setInput(e.target.value)}
                    InputProps={{
                        endAdornment:(
                        <div className="search">
                            <FaSearch onClick={() => setOpen(!open)}/>
                        </div>
                        )
                    }}
                    />
                    <Badge badgeContent={cart.length}>
                        <FaShoppingCart onClick={handleOpen}/>
                    </Badge>
                    <span>
                        <FaSignOutAlt onClick={logout}/>
                    </span>
                </Icons>
            </>}
        </HeaderDashboardStyle>
    );
};

export default HeaderDashboard;