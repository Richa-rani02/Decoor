import "./amountdetail.css";
import { useStateContext } from "../../../context/stateContext";
import { priceDetails } from "../../../utils/helper";
import {Link} from "react-router-dom";
const AmountDetails = () => {
    const { state: { productInCart } } = useStateContext();
    const { totalqty, price, discount } = priceDetails(productInCart);
    return (
        <>
            {/* <h2>price details</h2>
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
            <Link to="/checkout" className="btn btn-solid-primary btn-lg">CHECKOUT</Link> */}
             <div class="price_details">
             <div class="item">
                    <p>Quantity :</p>
                    <p>{totalqty}</p>
                </div>
                <div class="item">
                    <p>Bag Total :</p>
                    <p>Rs.{price}</p>
                </div>
                <div class="item">
                    <p>Bag Discount :</p>
                    <p class="green">Rs.-{discount}</p>
                </div>
                
                <div class="item">
                    <p>Order Total :</p>
                    <p>Rs.{price - discount}</p>
                </div>
                <div class="item">
                    <p>Delivery Charges :</p>
                    <p><span class="green">FREE</span></p>
                </div>
                {/* <div class="coupon">
                    <p>Coupon Discount :</p>
                    <p><a href="#">Apply Coupon</a></p>
                </div> */}
                <div class="total">
                    <p>Total :</p>
                    <p>Rs.{price - discount}</p>
                </div>
            </div>
            <div class="checkout">
            <Link to="/checkout" className="btn btn-solid-primary btn-lg checkout_btn">Checkout</Link>
            </div>
        </>
    )
}
export { AmountDetails };