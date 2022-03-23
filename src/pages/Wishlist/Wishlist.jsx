import {Product} from "../../components/index";
import { useStateContext } from "../../context/stateContext";
import "./Wishlist.css";
const Wishlist = () => {
    const {state:{ wishlist},}=useStateContext();
    return (
        <>
        <section className="products" id="products">
        <h3 className="heading-3 center-text">WISHLIST</h3>
            <div className="products-grid top-gutter-sm">
                {wishlist.map((item) => (
                    <Product key={item._id} product={item} />
                ))}
            </div>
            </section>
        </>
    )
}

export { Wishlist };