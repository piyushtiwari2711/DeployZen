import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

import Chatbot from './components/Chatbot';
import Projects from "./components/Projects";  
import Footer from'./components/Footer';



function App() {
  return (
    <Router>
      <div className="bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

