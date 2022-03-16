import {categoryUrl,LOAD_CATEGORY,IS_LOADING,ERROR,productUrl,LOAD_PRODUCTS} from "../utils/constants";
import axios from "axios";

export const getCategoryFromServer=async(dispatch)=>{
 
    try {
        const response = await axios.get(categoryUrl);
        if (response.status === 200) {
            dispatch({type:LOAD_CATEGORY,payload:response.data.categories});
        }
    } catch (error) {
        console.log(error);
    }
}
export const getProductFromServer=async(dispatch)=>{
 
    try {
        const response = await axios.get(productUrl);
        if (response.status === 200) {
            dispatch({type:LOAD_PRODUCTS,payload:response.data.products});
        }
    } catch (error) {
        console.log(error);
    }
}