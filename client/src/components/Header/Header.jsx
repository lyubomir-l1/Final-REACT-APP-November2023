import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/authContext';

export default function Header() {

    const {
        isAuthenticated,
        username,    
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">Hunting</Link></h1>
            <nav>
                <Link to="/userInfo"><span>{username}</span></Link>
                <Link to="/courses">Hunting courses</Link>
                <Link to="/about">About us</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/courses/create">Create Course</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
                
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
                
            </nav>
        </header>
    );
}
