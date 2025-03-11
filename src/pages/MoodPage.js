import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MoodPage = ({ title, messages, gifs }) => {
  const navigate = useNavigate();
  const [randomGif, setRandomGif] = useState("");

  useEffect(() => {
    setRandomGif(gifs[Math.floor(Math.random() * gifs.length)]);
  }, [gifs]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-6 text-shadow-lg">{title}</h1>
      {messages.map((msg, index) => (
        <p key={index} className="text-lg text-white max-w-md mb-4">{msg}</p>
      ))}
      <img src={randomGif} alt="Mood GIF" className="w-64 h-auto rounded-lg shadow-lg mt-4" />
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-200 transition"
      >
        Back to Main Page
      </button>
    </div>
  );
};

export default MoodPage;
