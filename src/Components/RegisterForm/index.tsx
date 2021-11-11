import Link from "@mui/material/Link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CssTextField } from "../../Styles/Input/style";
import Alert from "@mui/material/Alert";
import { ButtonGrey } from "../../Styles/ButtonGrey/style";
import HeadingRegister from "../../Assets/HeadingRegister.png";
import { StyledPaper } from "../../Styles/Paper/style"
import { RegisterFormStyle } from "./style";

const RegisterForm = () => {
    const history = useHistory();

    interface UserData {
        name: string;
        email: string;
        password: string;
        passwordConfirm: string;
    }

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email: yup.string().required("Campo obrigatório!").email("Email inválido."),
        password: yup.string().required("Campo obrigatório!"),
        passwordConfirm: yup.string().required("Campo obrigatório!").oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<UserData>({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data: UserData) => {
        axios.post("https://json-server-hamburgueria2.herokuapp.com/register", data)
        .then(() => {toast.success("Usuário criado!");
        history.push("/");})
        .catch(() => toast.error("Erro na criação de usuário."));
    }

    return (
        <StyledPaper variant="outlined">
            <RegisterFormStyle>
                <img src={HeadingRegister} alt="Cadastro"/>
                <Link href="/" color="#828282">Retornar para o login</Link>
            </RegisterFormStyle>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <CssTextField required label="Nome" {...register("name")}/>
                {errors.name &&
                <Alert severity="error">{errors.name?.message}</Alert>}
                <CssTextField required label="Email" {...register("email")}/>
                {errors.email &&
                <Alert severity="error">{errors.email?.message}</Alert>}
                <CssTextField required type="password" label="Senha" {...register("password")}/>
                {errors.password &&
                <Alert severity="error">{errors.password?.message}</Alert>}
                <CssTextField required type="password" label="Confirmar Senha" {...register("passwordConfirm")}/>
                {errors.passwordConfirm && 
                <Alert severity="error">{errors.passwordConfirm.message}</Alert>}
                <ButtonGrey type="submit">Cadastrar</ButtonGrey>
            </form>
        </StyledPaper>
    );
};

export default RegisterForm;