import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";
import Updates from "./pages/Updates"; 
import logo from "./assets/boilercube-logo.png";

function Nav() {
  const linkClass = ({ isActive }) =>
    "navlink" + (isActive ? " navlink-active" : "");

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          <img
            src={logo}
            alt="BoilerCube logo"
            className="brand-logo"
          />
          BoilerCube
        </NavLink>

        <nav className="nav">
          <NavLink to="/design" className={linkClass}>Design</NavLink>
          <NavLink to="/sponsors" className={linkClass}>Sponsors</NavLink>
          <NavLink to="/team" className={linkClass}>Team</NavLink>
          <NavLink to="/updates" className={linkClass}>Updates</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} BoilerCube</div>
          <div className="footer-note">Purdue student engineering club • Direct Air Capture</div>
        </div>
      </footer>
    </BrowserRouter>
  );
}
