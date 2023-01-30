import Home from "./pages/home.js";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/navbar.js";
import Footer from "./layouts/footer.js";
import GraphHome from "./pages/graphs/graphhome.js";
function App() {
  return (
    // <div>
    
    // <Home />

    // </div>

    <Router>
        <NavBar />
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/graphs" element={<GraphHome />} />
          </Routes>
          <Footer />
    </Router>
  );
}

export default App;
