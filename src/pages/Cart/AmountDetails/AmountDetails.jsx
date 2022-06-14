import "./amountdetail.css";
import { useStateContext } from "../../../context/stateContext";
import { priceDetails } from "../../../utils/helper";
import {Link} from "react-router-dom";
const AmountDetails = () => {
    const { state: { productInCart } } = useStateContext();
    const { totalqty, price, discount } = priceDetails(productInCart);
    return (
        <>
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