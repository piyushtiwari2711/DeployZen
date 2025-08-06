import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

import Chatbot from './components/Chatbot';
import Footer from'./components/Footer';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Home />
      <Footer />
      <Chatbot/>
    </div>
  );
}

export default App;

