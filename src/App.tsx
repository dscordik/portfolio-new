import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { initSmooth, scrollTop } from "./lib/smooth";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { scrollTop(); }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => { initSmooth(); }, []);
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
