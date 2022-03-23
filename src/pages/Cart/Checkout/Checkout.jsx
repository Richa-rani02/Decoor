import "./Checkout.css";
import { useStateContext } from "../../../context/stateContext";
import { priceDetails } from "../../../utils/helper";
const Checkout = () => {
    const { state: { productInCart } } = useStateContext();
    const { totalqty, price, discount } = priceDetails(productInCart);
    return (
        <>
            <h2>price details</h2>
            <hr />
            <div className="checkout-details">
                <div className="display-flex-row">
                    <span>Total Quantity</span>
                    <span className="ml-auto">{totalqty}</span>
                </div>
                <div className="display-flex-row">
                    <span>Price</span>
                    <span className="ml-auto">Rs.{price}</span>
                </div>
                <div className="display-flex-row">
                    <span>Discount</span>
                    <span className="ml-auto">Rs.{discount}</span>
                </div>
                <div className="display-flex-row">
                    <span>Delivery Charge</span>
                    <span className="ml-auto">Rs.0</span>
                </div>

            </div>
            <hr />
            <div class="display-flex-row">
                <h3>TOTAL AMOUNT</h3>
                <h3 class="ml-auto">{price - discount}</h3>
            </div>
            <a href="#" class="btn btn-solid-primary btn-lg">CHECKOUT</a>
        </>
    )
}
export { Checkout };