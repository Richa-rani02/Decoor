import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, TOKEN,LOAD_USER,LOGOUT } from "../utils/constants"
export const authReducer = (state, action) => {
    switch (action.type) {
        case FIRST_NAME:
            return {
                ...state,
                userDetails: {
                    ...state.userDetails, firstName: action.payload
                }
            };
        case LAST_NAME:
            return {
                ...state,
                userDetails: {
                    ...state.userDetails, lastName: action.payload
                }
            };
        case EMAIL:
            return {
                ...state,
                userDetails: {
                    ...state.userDetails, email: action.payload
                }
            };
        case PASSWORD:
            return {
                ...state,
                userDetails: {
                    ...state.userDetails, password: action.payload
                }
            };
        case TOKEN:
            return {
                ...state,
                token: {
                    ...state, token: action.payload
                }
            };
            case LOAD_USER:
            return {
                ...state,
                user:action.payload
            };
            case LOGOUT:
            return {
                ...state,
                user:null,token:null
            };
        default:
            return state

    }
}