import "./App.css";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
