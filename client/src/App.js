import Home from "./pages/home.js";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/navbar.js";
import Footer from "./layouts/footer.js";
import GraphHome from "./pages/graphs/graphhome.js";
import RadialTree from "./pages/graphs/booksradialtree.js";
import React from "react";

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
              <Route exact path="/graphs/booksradialtree" element={<RadialTree />} />
          </Routes>
          <Footer />
    </Router>
  );
}

export default App;
