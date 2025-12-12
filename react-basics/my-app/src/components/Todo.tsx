import { useState } from "react";

type TodoProps = {
  name: string;
  kommentar: string;
};

export default function Todo({ name, kommentar }: TodoProps) {
  const [erledigt, setErledigt] = useState(false);

  return (
    <div
      className={`p-4 m-4 border-2  border-black shadow text-center cursor-pointer select-none bg-white w-52 rounded-lg ${
        erledigt ? "line-through bg-gray-200 text-gray-500" : ""
      }`}
      onClick={() => setErledigt(!erledigt)}
    >
      <h2>{name}</h2>
      <p>{kommentar}</p>
    </div>
  );
}
