import "./ProductList.css";
import {Product} from "../../../components/index";
import { useStateContext } from "../../../context/stateContext";
import {getFilteredProducts} from "../../../utils/helper";
const ProductList=()=>{
    const {state:{ products,filters},}=useStateContext();
    const filteredProducts=getFilteredProducts(products,filters);
    return(
        <>
         <h3 className="bottom-gutter-sm">Showing All Products({filteredProducts.length}) </h3>
         <div className="products-grid">
         
         {filteredProducts.map((item)=>(
            <Product key={item.id} product={item} />
         ))}
          
         </div>
        </>
    )
}

export {ProductList};