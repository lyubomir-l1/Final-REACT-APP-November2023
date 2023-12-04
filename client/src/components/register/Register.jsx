import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
};


export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',

    })


    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email here..."
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                        required
                    />

                    <label htmlFor="username">Username:</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="Enter username here..."
                        onChange={onChange}
                        values={values[RegisterFormKeys.Username]}
                        required
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                        required
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                        required

                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="submitMessage">
                        <span>If you already have profile - <a href="/login">Login</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
