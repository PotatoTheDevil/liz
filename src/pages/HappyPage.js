import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HappyPage = () => {
  const navigate = useNavigate();

  // Background image for this page (change to whatever you like)
  const backgroundImage = "/images/happy-bg.png";

  // GIFs/Images after each paragraph
  const images = [
    "/images/freakbob.jfif",
    "/images/dog.gif",
    "/images/tt1.png",
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
      <h1 className="text-4xl font-bold text-gray mb-6 text-shadow-lg text-center w-full">
      YIPPPPPEEEE FER7ANA ? 
      </h1>

      <div className="max-w-md">
        {/* Paragraph 1 */}
        <p className="text-lg text-gray mb-4">
          IM GLAD YOU'RE HAPPY YIPPEPPEPEEE ! 
          ta3ref fr happiness suits you, its true, i know i haven't met you irl yet ama
          im sure you have the prettiest smile ever. ♡ 
        </p>
        <img src={shuffledImages[0]} alt="Happy GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 2 */}
        <p className="text-lg text-gray mb-4">
          yk wlh wlh theres something magical about happiness when it sneaks up on you.
          you forget all of your troubles feel like you're unstoppable (you literally are vro keep on being that way)
          its amazing nothing can beat it frr.
        </p>
        <img src={shuffledImages[1]} alt="Happy GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 3 */}
        <p className="text-lg text-gray mb-4">
          ta3ref whenever you're happy im genuienly sooo happy, seeing you enjoy life and just laughing,
          smiling and being you, makes me hellaaa happpy, keep on being you liz ♡
        </p>
        <img src={shuffledImages[2]} alt="Happy GIF" className="w-full h-auto rounded-lg mb-6" />

        {/* Paragraph 4 */}
        <p className="text-lg text-gray mb-4">
          soooo enjoy your happiness and embrace it and if
          you feel like dancing around the room right now... GO FOR ITT !!! :3
        </p>

        {/* Closing Line */}
        <p className="text-lg text-gray mb-4">
          (if you’re smiling  at your screen rn, just know I’m
          smiling too. don't lose your pretty smile, it suits you lots. 💜 )
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

export default HappyPage;
