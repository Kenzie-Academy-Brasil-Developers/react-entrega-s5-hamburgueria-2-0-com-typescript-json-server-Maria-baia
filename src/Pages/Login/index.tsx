import HeaderLogin from "../../Components/HeaderLogin";
import LoginForm from "../../Components/LoginForm";
import { LoginStyle } from "./style";

const Login = () => {
    return (
        <LoginStyle>
            <HeaderLogin/>
            <LoginForm/>
        </LoginStyle>
    );
};

export default Login;