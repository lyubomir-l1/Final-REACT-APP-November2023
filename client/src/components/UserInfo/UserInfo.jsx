import { Link } from 'react-router-dom';
import "./userInfo.css";
import AuthContext from '../contexts/authContext';
import { useContext } from "react";

export default function UserInfo() {

    const { email, username } = useContext(AuthContext);

    return (
        <>
            <section className="userInfo-section">
                <div className="userInfo-wrap">

                    <div className="userInfo-content">
                        <h2 className="userInfo-h2">
                            Username: <span className='span'>{username}</span>
                        </h2>
                        <h2 className="userInfo-h2">
                            Email: <span className='span'>{email}</span>
                        </h2>
                        <button><Link to="/">Home</Link></button>
                    </div>

                </div>
            </section>
        </>
    )
}