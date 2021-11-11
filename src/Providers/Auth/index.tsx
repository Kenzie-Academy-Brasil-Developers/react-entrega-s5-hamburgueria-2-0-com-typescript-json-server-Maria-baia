import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

interface User {
    email: string;
    password: string;
};

interface AuthProps {
    children: ReactNode;
};

interface AuthProviderData {
    authToken: string;
    logout: () => void;
    signIn: (userData: User) => void;
    userId: number;
};

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children } : AuthProps) => {
    const history = useHistory();
    const [userId, setUserId] = useState(0)

    const [authToken, setAuthToken] = useState<string>(
        () => localStorage.getItem("tolen") || ""
    );

    const signIn = (userData: User) => {
        axios.post("https://json-server-hamburgueria2.herokuapp.com/login", userData)
        .then(response => {
            setUserId(response.data.user.id);
            localStorage.setItem("token", response.data.accessToken);
            setAuthToken(response.data.accessToken);
            history.push("/dashboard");
        })
        .catch(() => toast.error("Email ou senha incorretos."));
    };

    const logout = () => {
        localStorage.clear();
        setAuthToken("");
        history.push("/");
    };

    return (
        <AuthContext.Provider value={{authToken, logout, signIn, userId}}>
            {children}
        </AuthContext.Provider>
    );
};