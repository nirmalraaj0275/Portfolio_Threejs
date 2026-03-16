import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./components/ProjectDetail";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />

       <Route path="/blogs" element={<Blogs />} />
  <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;