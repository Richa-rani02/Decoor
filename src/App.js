import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Navbar,Footer} from "./components/index";
import { Home,Products,SignIn,SignUp,Wishlist,Cart,ErrorPage } from "./pages/index";
import Mockman from "mockman-js";
import { ToasterWrapper } from "./utils/ToastWrapper";
function App() {
  return (
    <main>
      <Navbar />
      <ToasterWrapper/>
      <div className="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      </div>
      <Footer/>
    </main>
  );
}

export default App;