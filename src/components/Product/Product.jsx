import "./Product.css";

const Product = ({product}) => {
    const discount=Math.round(((product.price-product.offprice)/product.price)*100)
    return (
        <>
            <div className="product-box">
                <div className="image">
                    <img src={product.image} alt={product.title} />
                </div>
                <span className="card-rating">{product.rating}★ | 5</span>
                <div className="product-desc">
                    <span className="product-heading"><strong>{product.title}</strong><a><i
                        className="far fa-heart"></i></a></span>
                    <div className="price">&#x20B9;{product.price}  <span id="price-off">&#x20B9;{product.offprice}
                                    </span> <span className="highlight-text">({discount}%
                                    OFF)</span>
                    </div>
                </div>
                <div className="product-btn-container">
                    <a href="#" className="btn btn-solid-primary btn-lg">
                        <span>Add to Cart</span>
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                </div>
            </div>
        </>
    )
}
export { Product };