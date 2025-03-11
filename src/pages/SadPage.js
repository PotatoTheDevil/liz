import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SadPage = () => {
  const navigate = useNavigate();

  // Background image for this page (change to whatever you like)
  const backgroundImage = "/images/bg3.webp";

  // GIFs/Images after each paragraph
  const images = [
    "/images/sad1.gif",
    "/images/sad2.png",
    "/images/sad3.jpg",
  ];

  // Randomize which GIFs appear (so it’s not the same every time)
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(images.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 text-left"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray mb-6 text-shadow-lg self-start">
        mmmmm :/ feeling down?  
      </h1>

      <div className="max-w-md">
        {/* Paragraph 1 */}
        <p className="text-lg text-gray mb-4">
          hey hey, listen to me real quick. it's okay. whatever’s weighing on your heart, 
          whatever made today feel a little harder it's valid, your feelings are valid. 
          so sit with me for a bit, okay ml?  
        </p>
        <img src={shuffledImages[0]} alt="Sad GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 2 */}
        <p className="text-lg text-gray mb-4">
          i know it’s not always easy, wlh sometimes it feels like you’re carrying 
          the whole world on your back, like no one really gets it ama lemme assure you you're not alonee !
          never !! 
        </p>
        <img src={shuffledImages[1]} alt="Sad GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 3 */}
        <p className="text-lg text-gray mb-4">
          msh besh n9ollek “cheer up” or “just be happy” because i know that’s 
          not how it works ama lemme tell you this: everything's going to get better ♡  
          not because i’m blindly optimistic, but because you’ve made it through 
          every bad day before and i believe in you beautiful. 
        </p>
        <img src={shuffledImages[2]} alt="Sad GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 4 */}
        <p className="text-lg text-gray mb-4">
          so take a deep breathh relax yourself, if you 
          need to cry, cry. if you need to be still, be still. your feelings deserve recognition ♡  
          and you deserve your space, but if you're feeling like talking about it to me i'll always
          be here for you its a promise !  
        </p>

        {/* Closing Line */}
        <p className="text-lg text-gray mb-4">
          (sending you a big virtual hug rn, btw. also maybe a blanket and some tea.  
          you'll be alright lovely. i promise. 💜)
        </p>
      </div>

      {/* Button to go back */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-200 transition"
      >
        go back
      </button>
    </div>
  );
};

export default SadPage;
