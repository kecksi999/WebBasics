import { useState } from "react";

type PersonProps = {
  name: string;
  beruf: string;
  alter: number;
  id?: number;
};

export default function Person({ name, beruf, alter }: PersonProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`p-4 m-4 border-2 border-black shadow text-center cursor-pointer select-none bg-white w-64 rounded-lg ${
        selected ? "bg-blue-200 border-blue-500" : ""
      }`}
      onClick={() => setSelected(!selected)}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Beruf: <span className="font-semibold">{beruf}</span></p>
      <p className="text-gray-700">Alter: <span className="font-semibold">{alter} Jahre</span></p>
    </div>
  );
}
