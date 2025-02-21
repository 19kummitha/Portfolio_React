import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
export default function PRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />  {/* Home Page */}
      <Route path="/contact" element={<Contact />} />  {/* Contact Page */}
      <Route path="*" element={<h1>Page Not Found</h1>} />  {/* 404 Route */}
    </Routes>
  );
}
