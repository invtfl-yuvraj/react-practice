import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Github from "./Github/Github";
import User from "./User/User";

const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/invtfl-yuvraj")
    return res.json();
}

export {Home, Header, Footer, About, Contact, Github, User, githubInfoLoader}