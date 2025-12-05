import React, { useState } from "react";

type Props = {
  name: string;
  img?: string;
  amountOfClicks: number;
  onImageClick: () => void;
};

export default function Card({ name, img, amountOfClicks, onImageClick }: Props): JSX.Element {
  
  const [clicks, setClicks] = useState(amountOfClicks);

  const handleClick = () => {
    setClicks(clicks + 1);
    onImageClick();
  };

  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>

      {img && (
        <img
          src={img}
          alt={name}
          className="card-img"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      )}

      <p>Clicks: {clicks}</p>
    </div>
  );
}
