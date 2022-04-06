import "./signin_signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {signupOnServer} from "../../utils/getDataFromServer";
import { initialFormValues } from "./helper";
import { useState } from "react";
const SignUp = () => {
    const {authDispatch } = useAuth();
    let navigate = useNavigate();
    const [formValue,setFormValue]=useState({...initialFormValues});

    const signupHandler = (e) => {
        e.preventDefault();
        signupOnServer(formValue,authDispatch,navigate);
        setFormValue(initialFormValues);
    }

    const changeHandler=(e)=>{
      setFormValue({...formValue,[e.target.name]:e.target.value})
    }

    return (
        <div className="signup__page">
            <section className="signup">
                <form action="" className="signup-form top-gutter-lg" onSubmit={signupHandler}>
                    <h3>Sign Up</h3>
                    <input type="email" placeholder="Enter Email" name="email" value={formValue.email} className="box" required onChange={changeHandler} />
                    <input type="password" placeholder="Enter Password" name="password" value={formValue.password} className="box" required onChange={changeHandler} />
                    <input type="text" placeholder="Enter FirstName" name="firstName" value={formValue.firstName} className="box" required onChange={changeHandler} />
                    <input type="text" placeholder="Enter LastName" name="lastName" value={formValue.lastName} className="box" required onChange={changeHandler} />
                    <p>Already have an account  <Link to="/signin" className="link-text-primary" >Login</Link></p>
                    <button type="submit" value="signup" className="btn btn-solid-primary btn-lg btn-rounded-5" >SIGNUP</button>
                </form>
            </section>
        </div>
    )
}
export { SignUp };