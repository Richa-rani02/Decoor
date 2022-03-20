import "./signin_signup.css";
import {Link} from "react-router-dom";
const SignIn = () => {
    return (
        <div className="signin__page">
            <section class="login">
                <form action="" class="login-form top-gutter-lg">
                    <h3>login</h3>
                    <input type="email" placeholder="your email" class="box" />
                    <input type="password" placeholder="your password" class="box" />
                    <p>forget your password <a href="#" class="link-text-primary">click here</a></p>
                    <p>don't have an account <Link to="/signup" class="link-text-primary">create new</Link></p>
                    <input type="submit" value="login" class="btn btn-solid-primary btn-lg btn-rounded-5" />
                </form>
            </section>
        </div>
    )
}
export { SignIn };