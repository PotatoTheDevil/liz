import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Keep the global styles

const notes = [
  { id: 1, text: "happy", link: "/happy" },
  { id: 2, text: "sad", link: "/sad" },
  { id: 3, text: "stressed", link: "/stressed" },
  { id: 6, text: "surprise", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

const Home = () => {
  const navigate = useNavigate();
  const [playingGif, setPlayingGif] = useState(false);

  const handleNoteClick = (link) => {
    setPlayingGif(true);
    
    setTimeout(() => {
      if (link.startsWith("http")) {
        // If it's an external link, open it normally
        window.location.href = link;
      } else {
        // Otherwise, use React Router for internal links
        navigate(link);
      }
    }, 1600); // GIF duration before redirection
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 relative overflow-hidden"
      style={{ 
        fontFamily: "'Poppins', sans-serif", 
        backgroundImage: "url('/images/background.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}
    >
      {/* Inquiry Text */}
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-20 text-shadow-lg">
        How are we feeling today lovely?
      </h1>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 max-w-4xl relative z-10">
      {notes.map((note) => (
          <button
            key={note.id}
            onClick={() => handleNoteClick(note.link)}
            className="relative w-72 h-48 flex items-center justify-center text-center bg-cover bg-center transform transition duration-700 hover:scale-110 hover:rotate-2 hover-tilt"
            style={{ backgroundImage: "url('/images/envelope.png')" }}
          >
            <span className="absolute top-5 left-1/2 transform -translate-x-1/2 font-bold text-xl text-white px-4 py-1 whitespace-nowrap text-shadow-md">
              {note.text}
            </span>
          </button>
        ))}
      </div>

      {/* GIF Display */}
 {/* GIF Display - centered properly for mobile */}
 {playingGif && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <img
            src="/images/catexplodion.gif"
            alt="Loading..."
            className="w-48 h-auto md:w-64 lg:w-96 animate-scale-up"
          />
        </div>
      )}
      
      {/* CSS Animations */}
      <style>
        {`
          @keyframes scaleUp {
            0% { transform: scale(0.5); opacity: 0.8; }
            100% { transform: scale(3); opacity: 1; }
          }
          .animate-scale-up {
            animation: scaleUp 1s ease-in-out forwards;
          }
          .text-shadow-lg {
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
          }
          .text-shadow-md {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          .grainy-bg {
            background-image: url('/images/grain-texture.png');
            opacity: 0.2;
            mix-blend-mode: overlay;
          }
          .hover-tilt:hover {
            transform: perspective(500px) rotateX(5deg) rotateY(-5deg) scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Home;
/* website fully written by PotatoTheDevil, no using any of the code */