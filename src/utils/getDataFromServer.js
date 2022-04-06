import {categoryUrl,LOAD_CATEGORY,LOAD_USER,productUrl,LOAD_PRODUCTS,signinUrl, signupUrl,wishlistUrl, TOKEN,UPDATE_QTY,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST,cartUrl,ADD_TO_CART,REMOVE_FROM_CART,INC_QTY,DEC_QTY} from "../utils/constants";
import axios from "axios";
import { authActions } from "./actions";

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

export const addToCart=async(token,dispatch,product)=>{
    try{
        const response=await axios.post(cartUrl,{
            product
        },{
            headers:{
                authorization:token
            }
        });
        if(response.status===200 || response.status===201){
            dispatch({type:ADD_TO_CART,payload:response.data.cart});
        }
    }
    catch(error){
        console.log("Error while Adding item in cart",error);
    }
}

export const removeFromCart=async(token,dispatch,id)=>{
    try{
        const response=await axios.delete(`api/user/cart/${id}`,{
            headers:{
                authorization:token
            }
        });
        if(response.status===200 || response.status==201){
            dispatch({type:REMOVE_FROM_CART,payload:response.data.cart})
        }
    }
    catch(error){
        console.log("Error while removing item from cart",error);
    }
}

export const updateQty=async(token,dispatch,id,actionType)=>{
try{
    const response=await axios.post(`api/user/cart/${id}`,{
      action:{
          type:actionType===INC_QTY?"increment":"decrement",
      },
    },{
        headers:{
            authorization:token
        }
    });
    if(response.status===200 || response.status===201){
        dispatch({type:UPDATE_QTY,payload:response.data.cart})
    }
}catch(error){
    console.log("Error while updating qty of product",error);
}
}

export const signupOnServer=async(userDetails,authDispatch)=>{
    try{
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
                authDispatch({type:authActions.AUTH,payload:{user:response.data.createdUser,token:response.data.encodedToken}})
                // authDispatch({type:TOKEN,payload:response.data.encodedToken})
                // authDispatch({type:LOAD_USER,payload:response.data.createdUser})
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
                //  authDispatch({type:TOKEN,payload:response.data.encodedToken})
                //  authDispatch({type:LOAD_USER,payload:response.data.foundUser})
                  authDispatch({type:authActions.AUTH,payload:{user:response.data.foundUser,token:response.data.encodedToken}})
            }else{
                console.log(response.data.errors[0])
            }

            
    }catch(error){
        console.log(error);
    }
}