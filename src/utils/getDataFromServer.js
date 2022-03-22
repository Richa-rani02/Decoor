import {categoryUrl,LOAD_CATEGORY,LOAD_USER,productUrl,LOAD_PRODUCTS,signinUrl, signupUrl,wishlistUrl, TOKEN,LOAD_WISHLIST,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST} from "../utils/constants";
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
export const addToWishlist=async(token,dispatch,product)=>{
 
    try {
        const response = await axios.post(wishlistUrl,{
            product,
        },{
            headers:{
                authorization:token
            }
        }
        );
        if (response.status === 200 || response.status===201) {
            dispatch({type:ADD_TO_WISHLIST,payload:response.data.wishlist});
        }
    } catch (error) {
        console.log("Error in Add to wishlist",error);
    }
}
export const removefromwishlist=async(id,dispatch,token)=>{
    try {
        const response = await axios.delete(`api/user/wishlist/${id}`,{
            headers:{
                authorization:token,
            },
        });
        if (response.status === 200 || response.status===201) {
            dispatch({type:REMOVE_FROM_WISHLIST,payload:response.data.wishlist});
        }
    } catch (error) {
        console.log("Error in removing product from wishlist",error);
    }
}

export const signupOnServer=async(userDetails,authDispatch)=>{
    try{
        console.log(userDetails);
        const response=await axios.post(signupUrl,
            {
              firstName:userDetails.firstName,
              lastName:userDetails.lastName,
              email:userDetails.email,
              password:userDetails.password
            });
            console.log(response.status);
            if(response.status===201){
                localStorage.setItem("sessiontoken",response.data.encodedToken)
                authDispatch({type:TOKEN,payload:response.data.encodedToken})
                authDispatch({type:LOAD_USER,payload:response.data.createdUser})
            }
            
    }catch(error){
        console.log(error);
    }
}
export const loginToServer=async(userDetails,authDispatch)=>{
    try{
        const response=await axios.post(signinUrl,
            {
              email:userDetails.email,
              password:userDetails.password
            });
            if(response.status===200){

                 localStorage.setItem("sessiontoken",response.data.encodedToken)
                 authDispatch({type:TOKEN,payload:response.data.encodedToken})
                 authDispatch({type:LOAD_USER,payload:response.data.foundUser})
            }else{
                console.log(response.data.errors[0])
            }

            
    }catch(error){
        console.log(error);
    }
}