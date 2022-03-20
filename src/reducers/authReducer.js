import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, TOKEN,LOAD_USER } from "../utils/constants"
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
                user: {
                    ...state.user,user:action.payload
                }
            };
        default:
            return state

    }
}