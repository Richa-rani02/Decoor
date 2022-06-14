import "./Cart.css";
import { AmountDetails } from "./AmountDetails/AmountDetails";
import { CartItem } from "./CartItem/CartItem";
import { useLocation } from "react-router-dom";
import { EmptyPage } from "../index";
import { RouteSection } from "../../components";
import { useStateContext } from "../../context/stateContext";

const Cart = () => {
    const { state: { productInCart } } = useStateContext();
    const iscartHasItem = productInCart.length > 0;
    let location = useLocation();

    return (
        <>
            <RouteSection path={"Cart"} />
            {productInCart.length > 0 ?
                <>
                    <section className="cart-wrapper">
                        <article className="wrapper-content">
                            <div class="header_title">
                                <div class="cart-title">
                                    MY SHOPPING CART :
                                </div>
                                <div class="amount">
                                    <b>({productInCart.length}) ITEMS</b>
                                </div>

                            </div>
                            {productInCart.map((item)=>(
                    <CartItem key={item._id} product={item}/>
                ))}
                        </article>
                        <article className="wrapper-amount">
                        <div class="header_title">
                                <div class="cart-title">
                                TOTAL PRICE DETAILS:
                                </div>
                                <div class="amount">
                                <b>$ 25</b> 
                                </div>
                            </div>
                            <AmountDetails/>
                        </article>
                    </section>
                    {/* <h3 className="heading-3 center-text top-gutter-md">MY CART{iscartHasItem && `(${productInCart.length})`}</h3> */}
                    {/* <section className="cart-page section" id="cart-page">
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
            </section> */}
                </>

                :
                <EmptyPage path={location.pathname} />
            }
        </>
    )
}

export { Cart };