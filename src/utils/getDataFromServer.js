import {categoryUrl,LOAD_CATEGORY,IS_LOADING,ERROR,productUrl,LOAD_PRODUCTS} from "../utils/constants";
import axios from "axios";

export const getCategoryFromServer=async(dispatch)=>{
 
    try {
        const response = await axios.get(categoryUrl);
        if (response.status === 200) {
            console.log(response.data.categories);
            dispatch({type:LOAD_CATEGORY,payload:response.data.categories});
        }else{
            throw new Error("Failed to load category");
        }
    } catch (error) {
        console.log(error);
    }
}
export const getProductFromServer=async(dispatch)=>{
 
    try {
        const response = await axios.get(productUrl);
        if (response.status === 200) {
            console.log(response.data.products);
            dispatch({type:LOAD_PRODUCTS,payload:response.data.products});
        }else{
            throw new Error("Failed to load products");
        }
    } catch (error) {
        console.log(error);
    }
}