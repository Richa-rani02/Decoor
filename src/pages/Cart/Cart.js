import "./Cart.css";
import {Checkout} from "./Checkout/Checkout";
import { CartItem } from "./CartItem/CartItem";
const Cart = () => {
    return (
        <>
            <h3 className="heading-3 center-text top-gutter-md">CART(3)</h3>
            <section className="cart-page" id="cart-page">
            <div class="cart-container">
                <CartItem/>
                </div>
                <div className="checkout-container">
                <Checkout/>
                </div>
            </section>
        </>
    )
}

export { Cart };