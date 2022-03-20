import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Navbar} from "./components/index";
import { Home,Products,SignIn,SignUp } from "./pages/index";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        
         */}
      </Routes>
    </>
  );
}

export default App;