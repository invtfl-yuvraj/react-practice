import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import { Link } from "react-router-dom";
import MainHearder from "./components/MainHearder";

function App() {
  return (

    <div className="App">
      <nav>
        <ul>
          <li><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/about">About</NavLink></li>
          <li><NavLink className="nav-link" to="/services">Services</NavLink></li>
          <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          <li><NavLink className="nav-link" to="/support">Support</NavLink></li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<MainHearder />}>
          <Route index element={<Home></Home>} ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/support" element={<Support />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
