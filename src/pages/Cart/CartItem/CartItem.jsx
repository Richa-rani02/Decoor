import { useState,useEffect } from "react";
import "./CartItem.css";
import { INC_QTY, DEC_QTY } from "../../../utils/constants";
import {updateQty,removeFromCart,addToWishlist} from "../../../utils/getDataFromServer";
import { useAuth } from "../../../context/authContext";
import { useStateContext } from "../../../context/stateContext";
import { isInList } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";


const CartItem = ({ product }) => {
    const [isActive, setIsActive] = useState(false);
    const { authState: { token } } = useAuth();
    const {dispatch,state:{wishlist} } = useStateContext(); 
    const discount = Math.round(((product.price - product.offprice) / product.price) * 100)
   
    let navigate = useNavigate();

    const isInWishlist=isInList(wishlist,product._id);

    const updateCartHandler=(type)=>{
        updateQty(token,dispatch,product._id,type);
    }

    const removeCartHandler=()=>{

      removeFromCart(token,dispatch,product._id);
      setIsActive(!isActive);

    }

    const moveWishlistHandler=()=>{
        addToWishlist(token,dispatch,product);
        removeFromCart(token,dispatch,product._id);
        setIsActive(!isActive);
    }

    useEffect(()=>{
        isActive?document.body.style.overflow="hidden":document.body.style.overflow='unset'; 
    },[isActive])

    return (
        <>
            <div className="cart-item">
                <a className="badge-icon"> <i className="far fa-trash-alt fa-2x" onClick={() => setIsActive(!isActive)}></i></a>
                <img src={product.image} alt={product.title} />

                <div className="cart-content">
                    <div className="cart-heading">
                        <h3>{product.title}</h3>
                    </div>
                    <div className="cart-desc">
                        <div className="product-price">
                            <div className="price">&#x20B9; {product.offprice}</div>
                            <div className="previous-price">&#8377; {product.price}</div>
                        </div>
                        <div className="price-off">({discount}%
                            OFF)</div>
                        <div className="quantity">
                            <button className="btn-qty" id="decrease" onClick={()=>product.qty>1 && updateCartHandler(DEC_QTY)}
                            disabled={product.qty>1?false:true} >-</button>
                            <input type="number" id="number" value={product.qty} />
                            <button className="btn-qty" id="increase" onClick={()=>updateCartHandler(INC_QTY)} >+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-container ${isActive && 'modal-active'} `}>
                <div className="popup">
                    <div class="content flex-col">
                        <h4 className="large-text bottom-gutter-sm ">Delete</h4>
                        <p className="sub-p medium-text"> Are you sure you want to move this item from cart?</p>
                    </div>
                    <div className="modal-btn">
                        <button className="btn btn-outline-primary btn-sm btn-rounded-5" id="cancel" onClick={() => isInWishlist?navigate("/wishlist"):moveWishlistHandler()} >
                            {isInWishlist?"In wishlist":"Move to wishlist"}</button>
                        <button href="#" className="btn btn-solid-primary btn-sm btn-rounded-5 center-text" id="confirm" onClick={() => removeCartHandler()}>Delete</button>
                    </div>
                </div>
            </div>
        </>
        //
    )
}
export { CartItem };