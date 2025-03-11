import React from "react";
import MoodPage from "./MoodPage";

const HappyPage = () => (
  <MoodPage
    title="Feeling Happy? 😄"
    messages={[
      "Happiness is that warm feeling when everything just feels *right*.",
      "Take a deep breath and enjoy this moment. You deserve this joy. ✨"
    ]}
    gifs={["/images/happy1.gif", "/images/happy2.gif", "/images/happy3.gif"]}
  />
);

export default HappyPage;
