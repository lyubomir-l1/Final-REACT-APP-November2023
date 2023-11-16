import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import CoursesList from './components/CoursesList/CoursesList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseCreate from './components/CourseCreate/CourseCreate';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
    return (
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
            </Routes>
        </div>
    )
}

export default App
