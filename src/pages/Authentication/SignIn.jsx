import "./signin_signup.css";
import {Link,useNavigate} from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {loginToServer} from "../../utils/getDataFromServer";
import {  EMAIL, PASSWORD} from "../../utils/constants";

const SignIn = () => {
    let navigate = useNavigate();
    const {authState:{userDetails},authDispatch}=useAuth();

    const loginHandler=(e)=>{
        e.preventDefault();
        loginToServer(userDetails,authDispatch);
        navigate('/');
    }

    return (
        <div className="signin__page">
            <section className="login">
                <form action="" className="login-form top-gutter-lg" onSubmit={loginHandler}>
                    <h3>login</h3>
                    <input type="email" placeholder="Enter Email" value={userDetails.EMAIL} className="box" onChange={(e)=>authDispatch({type:EMAIL,payload:e.target.value})} />
                    <input type="password" placeholder="Enter Password" className="box" onChange={(e)=>authDispatch({type:PASSWORD,payload:e.target.value})}  />
                    <p>forget your password <a href="#" className="link-text-primary">click here</a></p>
                    <p>don't have an account <Link to="/signup" className="link-text-primary">create new</Link></p>
                    <button type="submit" value="login" className="btn btn-solid-primary btn-lg btn-rounded-5">Login</button>
                    <button type="submit" value="login" className="btn btn-outline-primary btn-lg btn-rounded-5">Guest Login</button>
                </form>
            </section>
        </div>
    )
}
export { SignIn };
