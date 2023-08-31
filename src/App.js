import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header id="header">
          <AppHeader />
        </header>
        <main>
          <AppHero />
          <AppAbout />
          <AppServices />
          <AppWorks />
          <AppTeams />
          <AppTestimonials />
          <AppContact />
        </main>
        <footer id="footer">
          <AppFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
