import Counter from "./Counter";



export default function CounterInterface() {
return (
<div className="flex flex-col items-center justify-center gap-6 p-10 bg-blue-300 min-h-screen">
<h1 className="text-4xl font-bold mb-6">Counter</h1>


<div className="flex flex-col items-center gap-4 p-6 border-2 border-black rounded-2xl shadow bg-blue-200 w-80">
<Counter name="Tobilocus" number={10} />
<Counter name="Luca" number={7} />
<Counter name="Jan" number={10} />
</div>
</div>
);
}