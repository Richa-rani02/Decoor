import { useState } from "react";
import { LOGOUT } from "../../utils/constants";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SEARCH_PRODUCT } from "../../utils/constants";
import { useStateContext } from "../../context/stateContext";
import { useAuth } from "../../context/authContext";
const Navbar = () => {
    let navigate = useNavigate();
    const [searchActive, setSearchActive] = useState(false);
    const [profileActive, setProfileActive] = useState(false);
    const location = useLocation();
    const { state, dispatch } = useStateContext();
    const { authState: { token, user}, authDispatch } = useAuth();

    const logoutHandler = () => {
        localStorage.removeItem("sessiontoken")
        authDispatch({ type: LOGOUT })
        
    }
  return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo">DECOR<span className="small-text ">KART</span> </Link>
            </div>
            <nav className="navbar">
                <Link id="nav-home" to="/">home</Link>
                {location.pathname === '/' && <><a id="nav-features" href="#features" >features</a><a id="nav-products" href="#products">products</a></>}
            </nav>
            <div className="nav-icons">
                <div className="fas fa-bars " id="menu-btn"></div>
                {location.pathname === '/products' && <div className="fas fa-search" id="search-btn" onClick={() => setSearchActive(prevCheck => !prevCheck)}></div>}
                <Link to="/">
                    <span className="badge-container icon-col">
                        <div className="fas fa-shopping-cart" id="cart-btn"></div>
                        <span className="badge icon-badge">0</span>
                    </span>
                </Link>
                <Link to={token ? "/wishlist" : "/signin"}>
                    <span className="badge-container icon-col">
                        <div className="fas fa-heart" id="wishlist-btn"></div>
                        <span className="badge icon-badge">0</span>
                    </span>
                </Link>
                <div className="fas fa-user" id="profile-btn" onClick={() => setProfileActive(prevCheck => !prevCheck)}></div>
            </div>
            <form action="" className={`search-form ${searchActive && 'active'}`}>
                <input type="search" id="search-box" placeholder="search here..."
                    value={state.searchProduct} onChange={(e) => dispatch({ type: SEARCH_PRODUCT, payload: e.target.value })} />
                <label htmlFor="search-box" className="fas fa-search"></label>
            </form>

            <div className={`profile-page ${profileActive && 'active'}`}>
                <div className="profile-container">

                    <div className="profile-items">
                        <i className="fas fa-user-circle fa-lg"></i>
                        <h3>{token? user?.firstName:"My profile"}</h3>
                    </div>
                    {token ? (
                        <div className="profile-items" onClick={() => logoutHandler()}>
                            <i className="fas fa-sign-out-alt fa-lg"></i>
                            <h3>Logout</h3>
                        </div>
                    ) : (<div className="profile-items" onClick={() => navigate("/signin")}>

                        <i className="fas fa-sign-in-alt fa-lg"></i>
                        <h3>Login</h3>
                    </div>)}

                </div>
            </div>
        </header>
    );
};

export { Navbar };