import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Navbar,Footer} from "./components/index";
import { Home,Products,SignIn,SignUp,Wishlist,Cart } from "./pages/index";
import Mockman from "mockman-js";
function App() {
  return (
    <main>
      <Navbar />
      <div className="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
      <Footer/>
    </main>
  );
}

export default App;