import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/about";
import Resume from "./Components/resume";
import Certifications from "./Components/Certifications";
export default function PRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
