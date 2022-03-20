import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Navbar} from "./components/index";
import { Home,Products,Cart } from "./pages/index";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        {/* 
        <Route path="/wishlist" element={<Wishlist />} />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default App;