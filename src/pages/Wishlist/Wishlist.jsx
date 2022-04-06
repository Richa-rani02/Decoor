import { Product } from "../../components/index";
import { useStateContext } from "../../context/stateContext";
import { useLocation } from "react-router-dom";
import { EmptyPage } from "../Error/EmptyPage";
import "./Wishlist.css";
const Wishlist = () => {
    const { state: { wishlist }, } = useStateContext();
    const location = useLocation();

    return (
        <>
            {wishlist.length > 0 ?

                <>
                    <section className="products" id="products">
                        <h3 className="heading-3 center-text">WISHLIST</h3>
                        <div className="products-grid top-gutter-sm">
                            {wishlist.map((item) => (
                                <Product key={item._id} product={item} />
                            ))}
                        </div>
                    </section>
                </>
                :
                <EmptyPage path={location.pathname}/>
            }
        </>

    )
}

export { Wishlist };