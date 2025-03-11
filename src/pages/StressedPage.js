import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StressedPage = () => {
  const navigate = useNavigate();

  // Background image for this page (change to whatever you like)
  const backgroundImage = "/images/bg4.jpg";

  // GIFs/Images after each paragraph
  const images = [
    "/images/s1.gif",
    "/images/s2.png",
    "/images/s3.gif",
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
        stress ?? :/
      </h1>

      <div className="max-w-md">
        {/* Paragraph 1 */}
        <p className="text-lg text-gray mb-4">
          deep breaths lovely, deep breaths.
          stress is a annoying bitch it tells you everything is falling apart when it isn’t.  
          it makes small things feel like the end of the world. but listen it will pass trust me it always does ♡
        </p>
        <img src={shuffledImages[0]} alt="Breathe GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 2 */}
        <p className="text-lg text-gray mb-4">
          wlh i know how overwhelming it gets. too many things to do, too many thoughts, 
          too much to handle. but try to calm yourselfff one thing at a time okay?  
          we don’t have to fix everything instantly ♡  
        </p>
        <img src={shuffledImages[1]} alt="Calm Image" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 3 */}
        <p className="text-lg text-gray mb-4">
          w yess i know it’s hard to just "relax" when your brain is doing allat 
          so let’s try this instead: take a few seconds to relax breathee, go wash your face if you want to,
         see? a little better?  
        </p>
        <img src={shuffledImages[2]} alt="Tea Image" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 4 */}
        <p className="text-lg text-gray mb-4">
          whatever is stressing you out right now, won’t last forever  
          so for now, let's just breathe. your brain needs space too, you know? :3
          lemme remind you that we can handle what's bothering you together
          i'd love to help ! ♡
        </p>

        {/* Closing Line */}
        <p className="text-lg text-gray mb-4">
          (sending you a lil virtual cheesecake rn 👀 also a little forehead kiss bc stress is no match for you,
          stay strong ml 💜)
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

export default StressedPage;
