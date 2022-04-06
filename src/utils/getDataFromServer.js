import { categoryUrl, LOAD_CATEGORY, LOAD_USER, productUrl, LOAD_PRODUCTS, signinUrl, signupUrl, wishlistUrl, TOKEN, UPDATE_QTY, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, cartUrl, ADD_TO_CART, REMOVE_FROM_CART, INC_QTY, DEC_QTY } from "../utils/constants";
import axios from "axios";
import { authActions } from "./actions";
import toast from "react-hot-toast";

export const getCategoryFromServer = async (dispatch) => {

    try {
        const response = await axios.get(categoryUrl);
        if (response.status === 200) {
            dispatch({ type: LOAD_CATEGORY, payload: response.data.categories });
        }
    } catch (error) {
        console.log(error);
    }
}
export const getProductFromServer = async (dispatch) => {

    try {
        const response = await axios.get(productUrl);
        if (response.status === 200) {
            dispatch({ type: LOAD_PRODUCTS, payload: response.data.products });
        }
    } catch (error) {
        console.log(error);
    }
}
export const addToWishlist = async (token, dispatch, product) => {

    try {
        const response = await axios.post(wishlistUrl, {
            product,
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (response.status === 200 || response.status === 201) {
            dispatch({ type: ADD_TO_WISHLIST, payload: response.data.wishlist });
        }
    } catch (error) {
        console.log("Error in Add to wishlist", error);
    }
}
export const removefromwishlist = async (id, dispatch, token) => {
    try {
        const response = await axios.delete(`api/user/wishlist/${id}`, {
            headers: {
                authorization: token,
            },
        });
        if (response.status === 200 || response.status === 201) {
            dispatch({ type: REMOVE_FROM_WISHLIST, payload: response.data.wishlist });
        }
    } catch (error) {
        console.log("Error in removing product from wishlist", error);
    }
}

export const addToCart = async (token, dispatch, product) => {
    try {
        const response = await axios.post(cartUrl, {
            product
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {
            dispatch({ type: ADD_TO_CART, payload: response.data.cart });
        }
    }
    catch (error) {
        console.log("Error while Adding item in cart", error);
    }
}

export const removeFromCart = async (token, dispatch, id) => {
    try {
        const response = await axios.delete(`api/user/cart/${id}`, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status == 201) {
            dispatch({ type: REMOVE_FROM_CART, payload: response.data.cart })
        }
    }
    catch (error) {
        console.log("Error while removing item from cart", error);
    }
}

export const updateQty = async (token, dispatch, id, actionType) => {
    try {
        const response = await axios.post(`api/user/cart/${id}`, {
            action: {
                type: actionType === INC_QTY ? "increment" : "decrement",
            },
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {
            dispatch({ type: UPDATE_QTY, payload: response.data.cart })
        }
    } catch (error) {
        console.log("Error while updating qty of product", error);
    }
}

export const signupOnServer = async (userDetails, authDispatch, navigate) => {
    const toastId = toast.loading("Creating your account...");
    try {
        const response = await axios.post(signupUrl,
            {
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                password: userDetails.password
            });
        if (response.status === 201) {
            toast.success("Account created successfully!", {
                id: toastId,
              });
            localStorage.setItem("sessiontoken", response.data.encodedToken)
            authDispatch({ type: authActions.AUTH, payload: { user: response.data.createdUser, token: response.data.encodedToken } })
            setTimeout(()=> {
                navigate("/");
              }, 1000);
        }

    } catch (error) {
        toast.error("Some error occured in signup. Try Again.", {
            id: toastId,
          });
          dispatch({ type: "AUTH_ERROR", payload: error.response });
    }
}
export const loginToServer = async (userDetails, authDispatch, navigate) => {
    const toastId = toast.loading("Logging in...");
    try {
        const {data:{foundUser,encodedToken},status} = await axios.post(signinUrl,
            {
                email: userDetails.email,
                password: userDetails.password
            });
        if (status === 200) {
            toast.success(`Hello, ${foundUser.firstName}. Welcome back!`, {
                id: toastId,
                icon: "👋",
              });
            localStorage.setItem("sessiontoken",encodedToken)
            authDispatch({ type: authActions.AUTH, payload: { user:foundUser, token:encodedToken } })
           
            setTimeout(()=> {
                 navigate(-1);
               }, 1000);
            
        }
    } catch (error) {
        toast.error("Some error occured in login. Try Again.", {
            id: toastId,
          });
          dispatch({ type: "AUTH_ERROR", payload: error.response });
    }
}