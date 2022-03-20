import "./Checkout.css";
const Checkout = () => {
    return (
        <>
            <h2>price details</h2>
            <hr />
            <div className="checkout-details">
                <div className="display-flex-row">
                    <span>Total Quantity</span>
                    <span className="ml-auto">3</span>
                </div>
                <div className="display-flex-row">
                    <span>Price</span>
                    <span className="ml-auto">Rs.800</span>
                </div>
                <div className="display-flex-row">
                    <span>Discount</span>
                    <span className="ml-auto">Rs.200</span>
                </div>
                <div className="display-flex-row">
                    <span>Delivery Charge</span>
                    <span className="ml-auto">Rs.150</span>
                </div>

            </div>
            <hr />
            <div class="display-flex-row">
                <h3>TOTAL AMOUNT</h3>
                <h3 class="ml-auto">Rs.750</h3>
            </div>
            <a href="#" class="btn btn-solid-primary btn-lg">CHECKOUT</a>
        </>
    )
}
export { Checkout };