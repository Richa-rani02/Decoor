import { ProtectedRoutes } from "./ProtectedRoutes";
import { Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Products, SignIn, SignUp, Wishlist, Cart, ErrorPage, Checkout } from "../pages/index";
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wishlist" element={
                <ProtectedRoutes>
                    <Wishlist />
                </ProtectedRoutes>
            } />
            <Route path="/cart" element={
                <ProtectedRoutes>
                    <Cart />
                </ProtectedRoutes>
            } />
            <Route path="/checkout" element={
                <ProtectedRoutes>
                    <Checkout />
                </ProtectedRoutes>
            } />
            <Route path="/mock" element={<Mockman />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}