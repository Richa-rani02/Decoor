import "./ProductList.css";
import {Product} from "../../../components/index";
import { useStateContext } from "../../../context/stateContext";
import {getFilteredProducts} from "../../../utils/helper";
const ProductList=()=>{
    const {state:{ products,filters},}=useStateContext();
    const filteredProducts=getFilteredProducts(products,filters);
    return(
        <>
        <div className="alert-container bottom-gutter-sm">
          <div className="left-side">
          <h3 className="">Showing All Products({filteredProducts.length}) </h3>
              </div>
        </div>
         <div className="products-grid">
         
         {filteredProducts.map((item)=>(
            <Product key={item.id} product={item} />
         ))}
          
         </div>
        </>
    )
}

export {ProductList};