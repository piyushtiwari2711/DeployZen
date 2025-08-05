import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hey there! 👋 I'm DeployBot, your digital assistant. How can I help you build something amazing today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Tell me about your services",
    "I need a website",
    "Mobile app development",
    "Get a quote",
    "View portfolio"
  ];

  const botResponses = {
    "tell me about your services": "We offer comprehensive digital solutions! 🚀\n\n• Web Development (React, Node.js)\n• Mobile Apps (iOS & Android)\n• UI/UX Design\n• Branding & Identity\n\nWhat specific service interests you most?",
    "i need a website": "Awesome choice! 💻 We create stunning, responsive websites that convert visitors into customers.\n\nWhat type of website are you looking for?\n• Business/Corporate\n• E-commerce\n• Portfolio\n• Custom Web App",
    "mobile app development": "Perfect! 📱 We build native iOS & Android apps with beautiful UI and seamless performance.\n\nTell me about your app idea:\n• What's the main purpose?\n• Who's your target audience?\n• Any specific features in mind?",
    "get a quote": "I'd love to help you get a personalized quote! 💰\n\nTo provide accurate pricing, I'll need to know:\n• Project type (web/mobile/both)\n• Timeline requirements\n• Key features needed\n\nShall we start with a quick consultation call?",
    "view portfolio": "Check out our amazing work! 🎨\n\nScroll up to see our 'Projects' section, or I can tell you about specific projects:\n• E-commerce platforms\n• SaaS dashboards\n• Mobile apps\n• Healthcare solutions\n\nWhich type interests you most?",
    "default": "That's a great question! 🤔 Let me connect you with our team for detailed information. \n\nIn the meantime, you can:\n• Explore our services above\n• Check out our portfolio\n• Schedule a free consultation\n\nWhat would you like to do next?"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input) => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && input.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    handleSendMessage();
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <>
      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 transform transition-all duration-500 ${
          isMinimized ? 'h-16' : 'h-[600px]'
        } animate-slide-up`}>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">DeployBot</h3>
                <p className="text-xs text-green-400">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:text-green-400 transition-colors duration-300 p-1 hover:bg-white/10 rounded"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-red-400 transition-colors duration-300 p-1 hover:bg-white/10 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isBot ? 'bg-green-500' : 'bg-slate-700'
                      }`}>
                        {message.isBot ? (
                          <Bot className="h-4 w-4 text-white" />
                        ) : (
                          <User className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.isBot 
                          ? 'bg-white text-gray-800 shadow-md' 
                          : 'bg-green-500 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.isBot ? 'text-gray-500' : 'text-green-100'
                        }`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="flex items-end space-x-2 max-w-xs">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {messages.length === 1 && (
                <div className="px-4 py-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.slice(0, 3).map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 ${
            isOpen ? 'rotate-180' : 'animate-bounce'
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-transform duration-300" />
          ) : (
            <MessageCircle className="h-6 w-6 transition-transform duration-300" />
          )}

          {!isOpen && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              1
            </div>
          )}

          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>

          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with DeployBot
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Chatbot;
