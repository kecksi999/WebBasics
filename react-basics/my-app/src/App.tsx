import React, { useState } from "react";
import "./App.css";

type CardProps = { name: string; img?: string };

const Card: React.FC<CardProps> = ({ name, img }) => {
  const [amountOfClicks, setAmountOfClicks] = useState<number>(0);

  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      {/* direkte Bild-URL (funktioniert zuverlässig) */}
      {img && (
        <img
          src={img}
          alt={name}
          className="card-img"
          onClick={() => setAmountOfClicks((c) => c + 1)}
        />
      )}
      <p className="card-text">This Image has been kirked {amountOfClicks} times</p>
    </div>
  );
};

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Card name="Jan" img="https://www.oefb.at/oefb2/images/1278650591628556536_8bcec21a41dac3b310bb-1,0-320x320.png" />
      <Card name="tobilocus" img="https://www.ccn.com/wp-content/uploads/2025/09/charlie-kirk-meme-token-1024x576.webp" />
      <Card name="simon insulinmon" img="https://profile-images.xing.com/images/4f1c97c99eb73c304a1e9a93bede3886-3/simon-grimm.256x256.jpg" />
    </div>
  );
}