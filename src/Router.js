import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CvEnglish from "./pages/CvEnglish";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";
import AdministratorZ from "./pages/AdministratorZ";
import NoPage from "./pages/NoPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="duan.html" element={<Projects/>}/>
          <Route path="cv.html" element={<Cv/>}/>
          <Route path="cv-en.html" element={<Cv/>}/>
          <Route path="administratorz" element={<AdministratorZ/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}
