// CSS
import "./App.css";
// Components
import Sidebar from "./Sidebar"
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";

// Packages
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
