import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import {Home} from "./pages/Home";
import Footer from "./components/Footer";
import { Project } from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
