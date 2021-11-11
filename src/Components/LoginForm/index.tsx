import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { CssTextField } from "../../Styles/Input/style";
import Alert from "@mui/material/Alert";
import { ButtonGreen } from "../../Styles/ButtonGreen/style";
import { ButtonGrey } from "../../Styles/ButtonGrey/style";
import { useHistory } from "react-router-dom";
import { StyledPaper } from "../../Styles/Paper/style";
import Heading3 from "../../Assets/Heading3.png";
import Body from "../../Assets/Body.png";

const LoginForm = () => {
    const history = useHistory();
    const {signIn} = useAuth();

    interface UserData {
        email: string;
        password: string;
    };

    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório!").email("Email inválido"),
        password: yup.string().required("Campo obrigatório!")
    });

    const {register, handleSubmit, formState: {errors}} = useForm<UserData>({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data: UserData) => {
        signIn(data);
    };

    return (
        <StyledPaper variant="outlined">
            <img src={Heading3} alt="login"/>
            <div className="form">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <CssTextField required label="Email" {...register("email")}/>
                {errors.email &&
                <Alert severity="error">{errors.email?.message}</Alert>}
                <CssTextField required type="password" label="Senha" {...register("password")}/>
                {errors.password && 
                <Alert severity="error">{errors.password?.message}</Alert>}
                <ButtonGreen color="success" type="submit" variant="contained">Logar</ButtonGreen>
            </form>
            <img src={Body} alt="description" className="description"/>
            <ButtonGrey onClick={() => history.push("/register")}>Cadastrar</ButtonGrey>
            </div>
        </StyledPaper>
    );   
};

export default LoginForm;