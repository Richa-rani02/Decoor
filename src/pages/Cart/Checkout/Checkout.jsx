import "./Checkout.css";
import { useStateContext } from "../../../context/stateContext";
import { priceDetails } from "../../../utils/helper";
import {Link} from "react-router-dom";
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
            <div className="display-flex-row">
                <h3>TOTAL AMOUNT</h3>
                <h3 className="ml-auto">{price - discount}</h3>
            </div>
            <Link to="/checkout" className="btn btn-solid-primary btn-lg">CHECKOUT</Link>
        </>
    )
}
export { Checkout };