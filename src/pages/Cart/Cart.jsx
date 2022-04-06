import "./Cart.css";
import {Checkout} from "./Checkout/Checkout";
import { CartItem } from "./CartItem/CartItem";
import { useLocation } from "react-router-dom";
import{EmptyPage} from "../index";
import { useStateContext } from "../../context/stateContext";

const Cart = () => {
    const {state:{ productInCart}}=useStateContext();
    const iscartHasItem=productInCart.length>0;
    let location=useLocation();

    return (
        <>
        {productInCart.length>0?
        <>
            <h3 className="heading-3 center-text top-gutter-md">MY CART{iscartHasItem && `(${productInCart.length})`}</h3>
            <section className="cart-page" id="cart-page">
            <div className="cart-container">
                {productInCart.map((item)=>(
                    <CartItem key={item._id} product={item}/>
                ))}
                </div>
                {iscartHasItem &&
                <div className="checkout-container">
                <Checkout/>
                </div>
                }
            </section>
            </>
            
            :
            <EmptyPage path={location.pathname}/>
            }
        </>
    )
}

export { Cart };