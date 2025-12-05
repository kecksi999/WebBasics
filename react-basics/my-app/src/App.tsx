import React from "react";
import Card from "./components/cards";

export default function App() {
  return (
    <div>
      <h1>My Cards</h1>

      <Card
        name="Simon Grimm"
        img="https://profile-images.xing.com/images/4f1c97c99eb73c304a1e9a93bede3886-3/simon-grimm.256x256.jpg"
        amountOfClicks={0}
        onImageClick={() => console.log("Card clicked!")}
      />
    </div>
  );
}