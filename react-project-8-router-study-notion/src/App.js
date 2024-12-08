import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react"
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return <div className="bg-richblack-900 w-screen h-screen felx flex-col">

    <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/signup" element={<Signup setIsLoggedIn = {setIsLoggedIn}></Signup>} />
      <Route path="/login" element={<Login setIsLoggedIn = {setIsLoggedIn}></Login>} />
      <Route path="/dashboard" element={

        <PrivateRoute isLoggedIn= {isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        
        } />

    </Routes>

  </div>;
}

export default App;
