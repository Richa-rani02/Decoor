import { createContext, useContext, useEffect, useReducer } from "react";
import { stateReducer } from "../reducers/stateReducer";
import { getCategoryFromServer, getProductFromServer } from "../utils/getDataFromServer";
const StateContext = createContext({});

const StateProvider = ({ children }) => {
    const initialState = {
        categories: [],
        products: [],
<<<<<<< HEAD
        productsInCart:[],
=======
        wishlist:[],
>>>>>>> d3f7ff7a94cd0de4f13ece8849f2c10b970fa601
        isLoading: false,
        setError: "",
        filters: {
            searchProduct: "",
            sortByPrice: "",
            filterByRating: "",
            priceRange: "",
            productCategory: [],

        }
    }
    const [state, dispatch] = useReducer(stateReducer, initialState);
    useEffect(() => {
        getCategoryFromServer(dispatch);
        getProductFromServer(dispatch);
    }, []);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};
const useStateContext = () => useContext(StateContext);

export { StateProvider, useStateContext };