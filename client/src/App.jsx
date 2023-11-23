import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService'

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import CoursesList from './components/CoursesList/CoursesList';
import Login from './components/login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/register/Register';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseCreate from './components/CourseCreate/CourseCreate';
import AboutUs from './components/AboutUs/AboutUs';
import { useState } from 'react';
import AuthContext from './components/contexts/authContext';

function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async(values) => {
       const result = await authService.login(values.email, values.password);
       setAuth(result);
       navigate("/");
    }

    const registerSubmitHandler = async(values) => {

        // TODO: Add validation if confirm-pass matches password

        const result = await authService.register(values.email, values.password);
        setAuth(result);
        navigate("/");
     };

     const logoutHandler = () => {
        setAuth({});
        navigate('/');
     }

    const values = {
        loginSubmitHandler, 
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
        <div id="box">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CoursesList />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/courses/create" element={<CourseCreate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/courses/:courseId" element={<CourseDetails /> } />
                <Route path="/logout" element={<Logout /> } />
            </Routes>
        </div>
        </AuthContext.Provider>
    )
}

export default App
