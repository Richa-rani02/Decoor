import "./Checkout.css";
import { AddressCard } from "./AddressCard/AddressCard";
import { AddressFormModal } from "./AddressFormModal/AddressFormModal";
import {useState} from "react";
export const Checkout=()=>{
  const [addressModalActive,setAddressModalActive]=useState(false);
return(

    <>
   <h3 className="heading-3 center-text top-gutter-md">CHECKOUT</h3>
    <section className="order-page">
     <article className="address-container">
     <h4>Deliver to</h4>
       <div className="address-details">
           <div className="address-list">
           <AddressCard/>
           </div>
           
       </div>
       <button className="add-address" onClick={()=>setAddressModalActive(prev=>!prev)}>Add New Address +</button>
     </article>
     <article className="order-container">
      <h4>Order Summary</h4>
      <div className="order-items">
     <p>Items</p>
     <hr/>
     <div>
     <div className="items top-gutter-sm">
      <span>WallHangling</span>
      <span>X 3</span>
     </div>
     <div className="items top-gutter-sm">
      <span>WallHangling</span>
      <span>X 3</span>
     </div>
     </div>
     <hr/>
     <p>Price Details</p>
     <hr/>
     <div>
     <div className="items top-gutter-sm">
      <span>Price (items)</span>
      <span>X 3</span>
     </div>
     <div className="items top-gutter-sm">
      <span>Discount</span>
      <span>X 3</span>
     </div>
     <div className="items top-gutter-sm">
      <span>Total Amount</span>
      <span>X 3</span>
     </div>
     </div>
     <hr/>
      <span className="discount-message">
        you will save Rs 2000
      </span>
      <hr></hr>
     <button className="order-btn top-gutter-md btn btn-solid-primary btn-lg">Place Order</button>
      </div>
     </article>
    </section>
    <AddressFormModal isOpen={addressModalActive} onClose={()=>setAddressModalActive(false)}/>
    </>
)
}