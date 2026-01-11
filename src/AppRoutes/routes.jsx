import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Temple from "../Pages/Temples/Templespage"
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temple" element={<Temple/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
