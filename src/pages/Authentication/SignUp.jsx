import "./signin_signup.css";
import {Link} from "react-router-dom";
const SignUp = () => {
    return (
        <div className="signup__page">
            <section class="signup">
                <form action="" class="signup-form top-gutter-lg">
                    <h3>Sign Up</h3>
                    <input type="email" placeholder="your email" class="box" />
                    <input type="password" placeholder="your password" class="box" />
                    <input type="text" placeholder="your name" class="box" />
                    <p>already have an account  <Link to="/signin" class="link-text-primary" >Login</Link></p>
                    <input type="submit" value="signup" class="btn btn-solid-primary btn-lg btn-rounded-5" />
                </form>
            </section>
        </div>
    )
}
export { SignUp };