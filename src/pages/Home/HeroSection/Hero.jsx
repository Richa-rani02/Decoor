import "./Hero.css";
import { Link } from "react-router-dom";
const Hero=()=>{
    return(
        <section className="hero__section">
        <div className="hero-content">
            <h3 className="hero-sub-title">Decorate your dream house with <span className="hero-title">Refresing</span> </h3>
            <h3 className="hero-sub-title">Home Decor Items</h3>
            <p>Upto 50% off on all products</p>
            <Link to="/" className="btn btn-solid-primary btn-lg btn-rounded-5">shop now</Link>

        </div>
    </section>
    );
};

export {Hero};