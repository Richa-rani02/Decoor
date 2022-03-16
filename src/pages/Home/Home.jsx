import "./Home.css";
import {Navbar,Product,Footer} from "../../components/index";
import {Hero} from "./HeroSection/Hero";
import {CategoryList} from "./CategoryList/CategoryList";
import { useStateContext } from "../../context/stateContext";

const Home = () => {
    const {state}=useStateContext();
    const {products}=state;
    console.log(products);
    return (
        <div className="Home">
            <Navbar />
            <Hero/>
            <CategoryList/>
            <section className="products" id="products">
                <h1 className="heading-1 center-text"> Best Selling</h1>
                <div className="products-grid top-gutter-lg">
                    {products.slice(0,4).map((item) => (
                        <Product key={item._id} product={item} />
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export { Home };