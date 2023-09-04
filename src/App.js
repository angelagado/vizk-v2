import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppLayout from "./components/home";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppProjects from "./components/projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/about" element={<AppAbout />} />
          <Route path="/services" element={<AppServices />} />
          <Route path="/projects" element={<AppProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
