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
            <div class="cartitem_wrap">
                <div class="product_info">
                    <div class="product_img">
                        <img src={product.image} alt="ProductImage" width="170px" height="170px"/>
                    </div>
                    <div class="product_data">
                        <div class="description">
                            <div class="product_title">
                            {product.title}
                            <p class="product_sub_title">
                                bounce back and responsiveness.Trusstic system technology.
                            </p>
                            </div>
                        </div>
                        <div className="quantity">
                            <button className="btn-qty" id="decrease" onClick={()=>product.qty>1 && updateCartHandler(DEC_QTY)}
                            disabled={product.qty>1?false:true} >-</button>
                            <input type="number" id="number" value={product.qty} />
                            <button className="btn-qty" id="increase" onClick={()=>updateCartHandler(INC_QTY)} >+</button>
                        </div>
                        <div class="price">
                            <div class="current_price">&#x20B9; {product.offprice}</div>
                            <div class="normal_price">&#8377; {product.price}</div>
                            <div class="discount">{discount}% OFF</div>
                        </div>
                    </div>
                </div>
                <div class="product_btns">
                    <div class="remove" onClick={() => removeCartHandler()}>REMOVE</div>
                    <div class="whishlist" onClick={() => isInWishlist?navigate("/wishlist"):moveWishlistHandler()}>{isInWishlist?"IN WHISHLIST":"MOVE TO WHISHLIST"}</div>
                </div>
                
            </div>
        </>
       
    )
}
export { CartItem };