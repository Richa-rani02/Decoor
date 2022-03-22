import { useAuth } from "../../context/authContext";
import { useStateContext } from "../../context/stateContext";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removefromwishlist } from "../../utils/getDataFromServer";
import { isInList } from "../../utils/helper";
const Product = ({ product }) => {
    const {
        _id:id,
        title,
        price,
        offprice,
        image,
        rating,
        categoryName

    } = product;
    let navigate = useNavigate();

    const { authState: { token } } = useAuth();
    const { state: { wishlist }, dispatch } = useStateContext();

    const discount = Math.round(((product.price - product.offprice) / product.price) * 100)

    const isInWishlist = isInList(wishlist,id);
    
    const wishlistHandler = () => {
        token
            ? isInWishlist
                ? removefromwishlist(id, dispatch, token)
                : addToWishlist(token, dispatch, product)
            : navigate("/signin");
    }
    return (
        <>
            <div className="product-box">
                <div className="image">
                    <img src={product.image} alt={product.title} />
                </div>
                <span className="card-rating">{product.rating}★ | 5</span>
                <div className="product-desc">
                    <span className="product-heading"><strong>{product.title}</strong><a onClick={() => wishlistHandler()}>
                        {
                            isInWishlist?<i className={`wishlist-toogle fas fa-heart`}></i>:<i className="far fa-heart"></i>
                        }
                        </a></span>
                    <div className="price">&#x20B9;{product.price}  <span id="price-off">&#x20B9;{product.offprice}
                    </span> <span className="highlight-text">({discount}%
                        OFF)</span>
                    </div>
                </div>
                <div className="product-btn-container">
                    <button className="btn btn-solid-primary btn-lg">
                        <span>Add to Cart</span>
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export { Product };