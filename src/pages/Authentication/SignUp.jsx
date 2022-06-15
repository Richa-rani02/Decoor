import "./signin_signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { signupOnServer } from "../../utils/getDataFromServer";
import { initialFormValues } from "./helper";
import { useState } from "react";
import { RouteSection, InputBox } from "../../components/index";
const SignUp = () => {
    const { authDispatch } = useAuth();
    let navigate = useNavigate();
    const [formValue, setFormValue] = useState({ ...initialFormValues });

    const signupHandler = () => {
        signupOnServer(formValue, authDispatch, navigate);
        setFormValue(initialFormValues);
    }

    const changeHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    return (
        <div className="auth__page">
            <RouteSection path={"Signup"} />
            <section className="auth">
                <form className="auth-form top-gutter-lg" onSubmit={e => e.preventDefault()}>
                    <h3>Sign Up</h3>
                    <div className="auth-error">
                        error
                    </div>
                    <InputBox labelName="Email" type="email" name="email" value={formValue.email} onChange={changeHandler} required />
                    <InputBox labelName="Password" type="password" name="password" value={formValue.password} onChange={changeHandler} required />
                    <InputBox labelName="firstName" type="text" name="firstName" value={formValue.userName} onChange={changeHandler} required />
                    <InputBox labelName="lastName" type="text" name="lastName" value={formValue.userName} onChange={changeHandler} required />
                    <p>Already have an account  <Link to="/signin" className="link-text-primary" >Login</Link></p>
                    <button value="signup" className="btn btn-solid-primary btn-lg btn-rounded-5" onClick={signupHandler} >SIGNUP</button>
                </form>
            </section>
        </div>
    )
}
export { SignUp };