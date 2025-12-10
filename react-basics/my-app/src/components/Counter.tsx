import { useState } from "react";


type CounterProps = {
name: string;
number: number;
};


export default function Counter({ name, number }: CounterProps) {
const [count, setCount] = useState(number);


return (
<div
className="p-4 m-4 border-2 border-black  shadow text-center cursor-pointer select-none bg-white w-52"
onClick={() => setCount(count + 1)}
>
<h2 className="text-xl font-bold">{name}: {count}</h2>
</div>
);
}