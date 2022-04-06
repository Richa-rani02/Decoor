import "./signin_signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { loginToServer } from "../../utils/getDataFromServer";
import {useState} from "react";
import { initialFormValues, testLogin } from "./helper";

const SignIn = () => {
    const [formValue, setFormValue] = useState({...initialFormValues});

    let navigate = useNavigate();
    const {authDispatch } = useAuth();

    const loginHandler = (e) => {
        e.preventDefault();
        loginToServer(formValue, authDispatch,navigate);
        setFormValue(initialFormValues);
    }
    const loadTestCred = () => {
        setFormValue(testLogin);

    }
    const ChangeHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    return (
        <div className="signin__page">
            <section className="login">
                <form action="" className="login-form top-gutter-lg" onSubmit={loginHandler}>
                    <h3>login</h3>
                    <input type="email" name="email" placeholder="Enter Email" value={formValue.email} className="box" required onChange={ChangeHandler} />
                    <input type="password" name="password" placeholder="Enter Password" value={formValue.password}  className="box" required onChange={ChangeHandler} />
                    <p>Forget your password <a href="#" className="link-text-primary">click here</a></p>
                    <p>Don't have an account <Link to="/signup" className="link-text-primary">create new</Link></p>
                    <button type="submit" value="login" className="btn btn-solid-primary btn-lg btn-rounded-5">Login</button>
                    <h4 className="top-gutter-sm test-btn" onClick={loadTestCred}>Load test credential</h4>
                </form>
            </section>
        </div>
    )
}
export { SignIn };
