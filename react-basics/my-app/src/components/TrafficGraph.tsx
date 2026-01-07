type TrafficGraphProps = {
  name?: string;
  data: number[];
};

export default function TrafficGraph({ name, data }: TrafficGraphProps) {
  const maxValue = Math.max(...data, 1);
  const times = [
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          {name || "Wähle eine Ampel aus"}
        </h2>
        {name && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            Live
          </span>
        )}
      </div>

      <div className="relative">
        <div className="flex items-end justify-around h-72 border-b border-l border-slate-200 rounded-bl-xl p-4 bg-white">
          {data.map((value, index) => {
            const heightPx = Math.min(value * 28, 220);
            return (
              <div key={index} className="flex flex-col items-center flex-1 max-w-14 gap-2">
                <div className="text-[11px] font-semibold text-slate-600">{value} Autos</div>
                <div
                  className="w-full rounded-lg bg-gradient-to-t from-slate-300 to-slate-100 shadow-sm border border-slate-200"
                  style={{ height: `${heightPx}px`, minHeight: "10px" }}
                ></div>
                <span className="text-[11px] font-medium text-slate-500">{times[index]}</span>
              </div>
            );
          })}
        </div>

        <div className="absolute left-0 top-0 -ml-10 h-72 flex flex-col justify-between text-[10px] font-semibold text-slate-400">
          <span>{maxValue}</span>
          <span>{Math.round(maxValue / 2)}</span>
          <span>0</span>
        </div>
      </div>

      <p className="text-center mt-4 text-sm text-slate-600">
        {name ? "Autos pro Stunde" : "Bitte eine Ampel auswählen"}
      </p>
    </div>
  );
}
