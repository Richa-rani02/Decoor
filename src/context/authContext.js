import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext=createContext({});

const AuthProvider=({children})=>{
const getoken=localStorage.getItem('sessiontoken')
    const authInitialState={
        user:null,
        token:getoken??null,

        userDetails:{
            firstName:null,
            lastName:null,
            email:null,
            password:null
        }
        
    };
    

const [authState,authDispatch]=useReducer(authReducer,authInitialState); 




    return (
        <AuthContext.Provider value={{authState,authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
    


};
const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider};