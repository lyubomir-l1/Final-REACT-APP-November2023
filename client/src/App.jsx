import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import CoursesList from './components/CoursesList/CoursesList';
import Login from './components/login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/register/Register';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseCreate from './components/CourseCreate/CourseCreate';
import AboutUs from './components/AboutUs/AboutUs';
import {AuthenticationProvider} from './components/contexts/authContext';
import CourseEdit from './components/CourseEdit/CourseEdit';

function App() {
    return (
        <AuthenticationProvider>
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
                <Route path="/courses/:courseId/edit" element={<CourseEdit /> } />
                <Route path="/logout" element={<Logout /> } />
            </Routes>
        </div>
        </AuthenticationProvider>
    )
}

export default App
