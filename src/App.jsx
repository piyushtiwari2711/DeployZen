import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { Project } from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";


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
        {/* Fixed WhatsApp Icon */}
        <a
          href={`https://wa.me/917217712638?text=${encodeURIComponent(`Hi, I’m interested in your software development services.\nPlease share more details about your offerings, pricing, and process.\nMy requirement is: [briefly describe your project]`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
    </Router>
  );
}

export default App;
