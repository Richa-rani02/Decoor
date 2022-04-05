import "./Footer.css";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer top top-gutter-xl">
      <div className="footer-container">
        <div class="box flex-col">
          <div className="footer-logo">
            <img src="../Assets/DECOR_KART.png" className="icon-responsive" alt="logo"></img>
          </div>
        </div>
        <div class="box flex-col">
          <h3 className="h1 footer-heading">quick links</h3>

          <Link to="/" className="footer-link"> <i class="fas fa-arrow-right" ></i> home</Link>
          <Link to="/products" className="footer-link"> <i class="fas fa-arrow-right"></i> products</Link>
          <Link to="/wishlist" className="footer-link"> <i class="fas fa-arrow-right"></i> wishlist</Link>
          <Link to="/cart" className="footer-link"> <i class="fas fa-arrow-right "></i> cart</Link>
          <Link to="/signin" className="footer-link"> <i class="fas fa-arrow-right "></i> login</Link>
        </div>
        <div class="box flex-col">
          <h3 className="h1 footer-heading">my Accounts</h3>
          <a href="https://www.linkedin.com/in/richa-rani02/" className="footer-link"> <GoMarkGithub size={22} /> Linkedin</a>
          <a href="https://github.com/Richa-rani02" className="footer-link"> <FaLinkedin size={22} /> github</a>
          <a href="#" className="footer-link"> <FaTwitter size={22} /> Twitter</a>
        </div>
      </div>
    </section>
  )
}

export { Footer };