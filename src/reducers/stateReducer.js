import {LOAD_CATEGORY,IS_LOADING,ERROR,LOAD_PRODUCTS} from "../utils/constants";
export const stateReducer = (state, action) => {
    switch (action.type) {
        case LOAD_CATEGORY:
            return {
              ...state,
              categories:action.payload
            };
        case LOAD_PRODUCTS:
            return {
                ...state,
                products:action.payload
            };
        case IS_LOADING:
            return {
             ...state,
             isLoading:!state.isLoading
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                setError: action.payload
            }


    }
}