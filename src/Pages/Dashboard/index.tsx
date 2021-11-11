import HeaderDashboard from "../../Components/HeaderDashboard";
import Products from "../../Components/Products";
import { useState } from "react";
import FilteredProducts from "../../Components/FIlteredProducts";
import { DashboardStyled } from "./style";

const Dashboard = () => {
    const [show, setShow] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <HeaderDashboard show={show} setShow={setShow} handleOpen={handleOpen} input={input} setInput={setInput}/>
            {show ?
            <DashboardStyled>
                <Products open={open} setOpen={setOpen}/>
            </DashboardStyled> :
            <DashboardStyled>
                <FilteredProducts input={input}/>
            </DashboardStyled>
            }
        </>
    );
};

export default Dashboard;