import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { ProjectSection } from "./components/ProjectSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
