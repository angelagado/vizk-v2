import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppHome from "./components/home";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppProjects from "./components/projects";
import AppTeams from "./components/teams";
import AppContact from "./components/contact";
import NoPage from "./components/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/about" element={<AppAbout />} />
        <Route path="/services" element={<AppServices />} />
        <Route path="/projects" element={<AppProjects />} />
        <Route path="/teams" element={<AppTeams />} />
        <Route path="/contact" element={<AppContact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
