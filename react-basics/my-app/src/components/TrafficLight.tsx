import { useState } from "react";

type TrafficLightProps = {
  name: string;
  state: 1 | 2 | 3;
  onClick: () => void;
  isSelected: boolean;
};

export default function TrafficLight({
  name,
  state,
  onClick,
  isSelected,
}: TrafficLightProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        isSelected
          ? "ring-4 ring-blue-500 shadow-2xl scale-105"
          : "hover:shadow-xl"
      }`}
    >
      <div className="absolute top-2 right-2">
        {isSelected && (
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        )}
      </div>
      
      <h3 className="text-xs font-bold mb-4 text-center text-gray-700 uppercase tracking-wide">
        {name}
      </h3>
      
      <div className="flex flex-col items-center gap-3 bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-inner">
        <div
          className={`w-14 h-14 rounded-full transition-all duration-300 ${
            state === 1
              ? "bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"
              : "bg-gray-700/50"
          }`}
        ></div>
        <div
          className={`w-14 h-14 rounded-full transition-all duration-300 ${
            state === 2
              ? "bg-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse"
              : "bg-gray-700/50"
          }`}
        ></div>
        <div
          className={`w-14 h-14 rounded-full transition-all duration-300 ${
            state === 3
              ? "bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"
              : "bg-gray-700/50"
          }`}
        ></div>
      </div>
    </div>
  );
}
