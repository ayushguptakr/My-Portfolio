
import { useState, useEffect } from "react";
import { MessageSquare, Send, X } from "lucide-react";

const ChatbotCharacter = ({ 
  primaryColor = "blue", 
  secondaryColor = "white",
  theme = "light" 
}) => {
  // Color mapping for Tailwind classes
  const colorMap = {
    blue: { bg: "bg-blue-500", bgHover: "hover:bg-blue-600", text: "text-blue-500", border: "border-blue-500", light: "bg-blue-100", dark: "bg-blue-700" },
    green: { bg: "bg-green-500", bgHover: "hover:bg-green-600", text: "text-green-500", border: "border-green-500", light: "bg-green-100", dark: "bg-green-700" },
    purple: { bg: "bg-purple-500", bgHover: "hover:bg-purple-600", text: "text-purple-500", border: "border-purple-500", light: "bg-purple-100", dark: "bg-purple-700" },
    indigo: { bg: "bg-indigo-500", bgHover: "hover:bg-indigo-600", text: "text-indigo-500", border: "border-indigo-500", light: "bg-indigo-100", dark: "bg-indigo-700" }
  };

  const colors = colorMap[primaryColor] || colorMap.blue;
  const isDark = theme === "dark";

  const [isVisible, setIsVisible] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);
    
    return () => clearInterval(blinkInterval);
  }, []);

  // Initial greeting
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{ text: "Hi there! How can I help you today? 😊", isBot: true }]);
    }
  }, [isChatOpen]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    
    // User message
    setMessages((prev) => [...prev, { text: inputMessage, isBot: false }]);
    setInputMessage("");
    
    // Simulate bot reply after 1s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: getBotReply(inputMessage), isBot: true }
      ]);
    }, 1000);
  };

  // Simple bot replies
  const getBotReply = (message) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("hi") || lowerMsg.includes("hello")) {
      return "Hello! Nice to meet you!";
    } else if (lowerMsg.includes("how are you")) {
      return "I'm doing great, thanks for asking! 😊";
    } else if (lowerMsg.includes("bye")) {
      return "Goodbye! Have a nice day! 👋";
    } else if (lowerMsg.includes("work") || lowerMsg.includes("project")) {
      return "Check out my portfolio projects section!";
    } else if (lowerMsg.includes("contact")) {
      return "You can reach me through the contact page.";
    } else {
      return "That's interesting! Tell me more!";
    }
  };

  return (
<div className="fixed right-20 bottom-0 z-50"> {/* Changed bottom-6 to bottom-8 */}
  {/* Chatbot Popup */}
  {isChatOpen && (
    <div className={`w-72 h-96 rounded-lg shadow-xl flex flex-col border ${colors.border} overflow-hidden ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
      {/* Chat Header */}
      <div className={`${colors.bg} text-white p-3 flex items-center justify-between`}>
        <h3 className="font-medium">Portfolio Assistant</h3>
        <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200">
          <X size={18} />
        </button>
      </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${msg.isBot ? (isDark ? "bg-gray-700 text-white" : colors.light) : `${colors.bg} text-white`}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className={`p-3 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
                className={`flex-1 p-2 rounded-l-lg focus:outline-none ${isDark ? "bg-gray-700 text-white placeholder-gray-400" : "bg-gray-100 placeholder-gray-500"}`}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage} className={`${colors.bg} ${colors.bgHover} text-white p-2 rounded-r-lg transition-colors`}>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Character */}
      {isVisible && (
        <div className={`relative transition-all duration-300 hover:scale-110 cursor-pointer ${isChatOpen ? "opacity-0" : "opacity-100"}`} onClick={() => setIsChatOpen(true)}>
          {/* Speech Bubble */}
          {/* <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2 ${isDark ? "bg-gray-700 text-white" : "bg-white text-gray-800"} text-sm px-3 py-2 rounded-lg shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300`}>
            <p>Ask me about my portfolio!</p>
            <div className={`absolute bottom-0 left-1/2 w-3 h-3 ${isDark ? "bg-gray-700" : "bg-white"} transform -translate-x-1/2 translate-y-1/2 rotate-45`}></div>
          </div> */}

          {/* Speech Bubble */}
          <div
  className={`absolute -top-14 left-1/2 transform -translate-x-1/2 ${
    isDark ? "bg-gray-700 text-white" : "bg-white text-gray-800"
  } text-sm px-3 py-2 rounded-lg shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 ${
    isChatOpen ? "opacity-100" : "opacity-0"
  } z-10`} // Added z-index here
>
  <p>Ask me about my portfolio!</p>
  <div
    className={`absolute bottom-0 left-1/2 w-3 h-3 ${
      isDark ? "bg-gray-700" : "bg-white"
    } transform -translate-x-1/2 translate-y-1/2 rotate-45`}
  ></div>
</div>


          {/* Character Body */}
          {/* <div className={`w-20 h-20 ${colors.bg} rounded-full relative animate-bounce-slow`}> */}
          <div
  className={`w-20 h-20 ${colors.bg} rounded-full relative animate-bounce-slow ${
    isChatOpen ? "opacity-0" : "opacity-100"
  }`}
  onClick={() => setIsChatOpen(true)}
  style={{ zIndex: 0 }} // Make sure the character stays behind the speech bubble
>
            {/* Eyes */}
            <div className="flex space-x-2 absolute top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-white rounded-full relative">
                {/* Blinking effect */}
                <div className={`absolute top-0 left-0 w-full h-full ${colors.bg} transition-opacity duration-200 ${isBlinking ? "opacity-100" : "opacity-0"}`}></div>
              </div>
              <div className="w-3 h-3 bg-white rounded-full relative">
                <div className={`absolute top-0 left-0 w-full h-full ${colors.bg} transition-opacity duration-200 ${isBlinking ? "opacity-100" : "opacity-0"}`}></div>
              </div>
            </div>

            {/* Smile Animation */}
            {/* <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-white rounded-full ${isBlinking ? "scale-110" : ""}`}></div> */}
            {/* Smile */}
<div
  className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-white rounded-full"
  style={{
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    transform: 'translateX(-50%) rotate(180deg)', // Flip to make it a smile
  }}
></div>


            {/* Chat icon badge */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
              <MessageSquare size={12} />
            </div>
          </div>
        </div>
      )}

      {/* Custom animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default ChatbotCharacter;
