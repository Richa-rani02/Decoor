import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [active, setActive] = useState(false);
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo">DECOR<span className="small-text ">KART</span> </Link>
            </div>
            <nav className="navbar">
                <a id="nav-home" href="/#home">home</a>
                <a id="nav-features" href="/#features" >features</a>
                <a id="nav-products" href="/#products">products</a>
            </nav>
            <div className="nav-icons">
                <div className="fas fa-bars " id="menu-btn"></div>
                <div className="fas fa-search" id="search-btn" onClick={() => setActive(!active)}></div>
                <Link to="/">
                    <span className="badge-container icon-col">
                    <div className="fas fa-shopping-cart" id="cart-btn"></div>
                        <span className="badge icon-badge">0</span>
                    </span>
                </Link>
                <Link to="/">
                <span className="badge-container icon-col">
                <div className="fas fa-heart" id="wishlist-btn"></div>
                        <span className="badge icon-badge">0</span>
                    </span>
                </Link>
                <div className="fas fa-user" id="profile-btn"></div>
            </div>
            <form action="" className={`search-form ${active && 'active'}`}>
                <input type="search" id="search-box" placeholder="search here..." />
                <label for="search-box" class="fas fa-search"></label>
            </form>
            <div className="profile-page ">
                <div className="profile-container">

                    <div className="profile-items">
                        <i className="fas fa-user-circle fa-lg"></i>
                        <h3>My Profile</h3>
                    </div>
                    <Link to="/">
                        <div className="profile-items">
                            <i className="fas fa-sign-in-alt fa-lg"></i>
                            <h3>Login</h3>
                        </div>
                    </Link>
                    <div className="profile-items">
                        <i className="fas fa-sign-out-alt fa-lg"></i>
                        <h3>Logout</h3>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { Navbar };