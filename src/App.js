import "./App.css";
import {Route,Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import Mockman from "mockman-js";
function App() {
  return (
    <div>
 <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mock" element={<Mockman/>} />
        {/* <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;