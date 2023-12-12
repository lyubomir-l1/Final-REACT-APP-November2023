import { createContext } from "react";

import * as authService from '../../services/authService'

import { useNavigate } from 'react-router-dom';
import usePersistedState from "../../hooks/usePersistedState";



const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';
export const AuthenticationProvider = ({
    children,
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
       
            const result = await authService.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate("/");
    
        
        
    }

    const registerSubmitHandler = async (values) => {

        try {
            const result = await authService.register(values.email, values.username, values.password, values.confirmPassword);
            if(values.password.length < 5){
                alert('Password is too short!');
                return;
            }
            
            if(values.password !== values.confirmPassword){
                alert('Password and Confirm Password do not match!');
                return;
            }
            
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate("/");
        }catch(err) {
            alert(`${err}`);
        }

        
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext