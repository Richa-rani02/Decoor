import {Product} from "../../components/index";
import { useStateContext } from "../../context/stateContext";
import "./Wishlist.css";
const Wishlist = () => {
    const {state:{ products,filters},}=useStateContext();
    return (
        <>
        <section class="products" id="products">
        <h3 class="heading-3 center-text">WISHLIST</h3>
            <div class="products-grid top-gutter-sm">
                {products.map((item) => (
                    <Product key={item._id} product={item} />
                ))}
            </div>
            </section>
        </>
    )
}

export { Wishlist };