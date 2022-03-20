import "./signin_signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {signupOnServer} from "../../utils/getDataFromServer";
import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD } from "../../utils/constants";
const SignUp = () => {
    const { authState: { userDetails }, authDispatch } = useAuth();
    let navigate = useNavigate();
    const signupHandler = (e) => {
        e.preventDefault();
        signupOnServer(userDetails, authDispatch);
         navigate('/');
    }
    return (
        <div className="signup__page">
            <section className="signup">
                <form action="" className="signup-form top-gutter-lg" onSubmit={signupHandler}>
                    <h3>Sign Up</h3>
                    <input type="email" placeholder="Enter Email " className="box" onChange={(e) => authDispatch({ type: EMAIL, payload: e.target.value })} />
                    <input type="password" placeholder="Enter Password" className="box" onChange={(e) => authDispatch({ type: PASSWORD, payload: e.target.value })} />
                    <input type="text" placeholder="Enter FirstName" className="box" onChange={(e) => authDispatch({ type: FIRST_NAME, payload: e.target.value })} />
                    <input type="text" placeholder="Enter LastName" className="box" onChange={(e) => authDispatch({ type: LAST_NAME, payload: e.target.value })} />
                    <p>already have an account  <Link to="/signin" className="link-text-primary" >Login</Link></p>
                    <button type="submit" value="signup" className="btn btn-solid-primary btn-lg btn-rounded-5" >SIGNUP</button>
                </form>
            </section>
        </div>
    )
}
export { SignUp };