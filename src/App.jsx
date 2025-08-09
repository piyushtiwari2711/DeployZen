

import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { Project } from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import React, { useState } from "react";


function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);

  // Send message to Gemini backend
  const handleSend = async () => {
    if (chatInput.trim() === "") return;
    setChatMessages([...chatMessages, { sender: "user", text: chatInput }]);
    setLoading(true);
    const userMessage = chatInput;
    setChatInput("");
    try {
      const res = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      setChatMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: data.reply || "Sorry, no response." }
      ]);
    } catch (err) {
      setChatMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Error connecting to Gemini API." }
      ]);
    }
    setLoading(false);
  };

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
