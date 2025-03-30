import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Inscription from "./pages/inscription";
import Footer from "./components/footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
