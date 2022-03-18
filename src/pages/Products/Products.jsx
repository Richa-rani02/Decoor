import "./Products.css";
import {Filter} from "./Filter/Filter";
import { ProductList} from "./ProductList/ProductList";
const Products=()=>{
    return(
        <div className="product_page" >
        <div className="filter__responsive">
            <i className="fas fa-filter"></i>
        </div>
        
        <div className="filter__list__wrap">
            <div className="filter__wrap">
           <Filter/> 

            </div>
            <div className="List__wrap">
            <ProductList/>

            </div>
        </div>
        </div>
        
    );
}
export {Products};