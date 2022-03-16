import "./Category.css";
import { Link } from "react-router-dom";
const Category = ({ category }) => {
    return (
        <>
            <div className="features">
                <Link to="/">
                    <img src={category.image} alt={category.categoryName} />
                    <div className="feature__content">
                        <h3>{category.categoryName}</h3>
                    </div>
                </Link>

            </div>
        </>
    );
};

export { Category };