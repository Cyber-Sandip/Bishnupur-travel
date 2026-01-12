import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Temple from "../Pages/Temples/Templespage"
import ArtAndCraft from "../Pages/Art & Craft/art&craft"
import Naturalview from "../Pages/Natural View/naturalview"
import Contact from "../Pages/Contact/contact"
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temple" element={<Temple/>} />
        <Route Path="/Art And Craft" element={<ArtAndCraft/>} />
        <Route Path="/Naturalview" element={<Naturalview/>} />
        <Route Path="/Contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
