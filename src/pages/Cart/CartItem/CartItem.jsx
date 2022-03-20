import { useState } from "react";
import "./CartItem.css";

const CartItem = () => {
    const [isActive,setIsActive]=useState(false);
    return (
        <>
            <div className="cart-item">
                <a className="badge-icon"> <i className="far fa-trash-alt fa-2x" onClick={()=>setIsActive(!isActive)}></i></a>
                <img src="" alt="macrame" />

                <div className="cart-content">
                    <div className="cart-heading">
                        <h3>Macrame</h3>
                    </div>
                    <div className="cart-desc">
                        <div className="product-price">
                            <div className="price">&#x20B9; 300</div>
                            <div className="previous-price">&#8377; 500</div>
                        </div>
                        <div className="price-off">20% off</div>
                        <div className="quantity">
                            <button className="btn-qty" id="decrease" >-</button>
                            <input type="number" id="number" value="0" />
                            <button className="btn-qty" id="increase" >+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-container ${isActive && 'modal-active'} `}>   
                <div className="popup">
                    <div class="content flex-col">
                        <h3>Delete</h3>
                        <p className="sub-p"> Are you sure you want to move this item from cart?</p>
                    </div>
                    <div className="modal-btn">
                        <a className="btn btn-outline-primary btn-sm btn-rounded-5 auto-margin" id="cancel" onClick={()=>setIsActive(!isActive)}>Move to wishlist</a>
                        <a href="#" className="btn btn-solid-primary btn-sm btn-rounded-5 " id="confirm">Delete</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export { CartItem };