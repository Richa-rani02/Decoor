import "./Empty.css";
import { useNavigate } from "react-router-dom";
export const EmptyPage = ({ path }) => {
    let message = "";
    let navigate = useNavigate();
    switch (path) {
        case "/products":
            {
                message = "Product list is empty.Add products !!"
            }
            break;
        case "/cart":
            {
                message = "Your cart is empty !!"
            }
            break;
        case "/wishlist":
            {
                message = "Your wishlist is empty !!"
            }
    }

    return (
        <div className="empty-page">
            <div className="empty-img">
                <img src="../Assets/emptyshoppingbag.png" />
            </div>
            <div className="empty-text flex-col">
                <span >{message}</span>
                {
                    path !== "/products" && <button className=" btn btn-solid-primary btn-sm btn-rounded-5 flex-display" onClick={() => navigate("/products")}>Shop now</button>
                }

            </div>
        </div>
    )
}