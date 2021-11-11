import HeaderLogin from "../../Components/HeaderLogin";
import RegisterForm from "../../Components/RegisterForm";
import { RegisterStyle } from "./style";

const Register = () => {
    return (
        <RegisterStyle>
            <HeaderLogin/>
            <RegisterForm/>
        </RegisterStyle>
    );
};

export default Register;