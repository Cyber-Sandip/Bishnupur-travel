import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Temple from "../Pages/Temples/Templespage";
import ArtAndCraft from "../Pages/ArtAndCraft/ArtAndCraftPage";
import Nature from "../Pages/Natural-View/naturalview";
import Contact from "../Pages/Contact/contact.jsx";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temple" element={<Temple/>} />
        <Route path="/art" element={<ArtAndCraft/>} />
        <Route path="/Natural-view" element={<Nature/>} />
        <Route path="/Contact" element={<Contact/>} />       
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
