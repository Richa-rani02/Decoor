import "./Checkout.css";
import { AddressCard } from "./AddressCard/AddressCard";
import { AddressFormModal } from "./AddressFormModal/AddressFormModal";
import { useStateContext } from "../../context/stateContext";
import { useState, useEffect } from "react";
import { getAddress } from "../../utils/getDataFromServer";
import { useAuth } from "../../context/authContext";
import { priceDetails } from "../../utils/helper";
export const Checkout = () => {
  const [addressModalActive, setAddressModalActive] = useState(false);
  const { state: { address, productInCart }, dispatch } = useStateContext();
  const { authState: { token } } = useAuth();
  const { price, discount } = priceDetails(productInCart);
  useEffect(() => {
    getAddress(token, dispatch);
  }, [])
  return (
    <>
      <h3 className="heading-3 center-text top-gutter-md">CHECKOUT</h3>
      <section className="order-page">
        <article className="address-container">
          <h4>Deliver to</h4>
          <div className="address-details">
            <div className="address-list">
              {address.map((addressList) => (
                <AddressCard addressDetail={addressList} />
              ))}
            </div>
          </div>
          <button className="add-address" onClick={() => setAddressModalActive(prev => !prev)}>Add New Address +</button>
        </article>
        <article className="order-container">
          <h4>Order Summary</h4>

          <div className="order-items">
            <p>Items</p>
            <hr />
            <div>
              {productInCart?.map((orderItem) => (

                <div className="items top-gutter-sm">
                  <span>{orderItem.title}</span>
                  <span>X {orderItem.qty}</span>
                </div>

              ))}
            </div>
            <hr />
            <p>Price Details</p>
            <hr />
            <div>
              <div className="items top-gutter-sm">
                <span>Price (items)</span>
                <span>Rs.{price}</span>
              </div>
              <div className="items top-gutter-sm">
                <span>Discount</span>
                <span>Rs.{discount}</span>
              </div>
              <div className="items top-gutter-sm">
                <span>Total Amount</span>
                <span>{price - discount}</span>
              </div>
            </div>
            <hr />
            <span className="discount-message">
              you will save Rs {discount}
            </span>
            <hr></hr>
            <button className="order-btn top-gutter-md btn btn-solid-primary btn-lg">Place Order</button>
          </div>
        </article>
      </section>
      <AddressFormModal isOpen={addressModalActive} onClose={() => setAddressModalActive(false)} />
    </>
  )
}