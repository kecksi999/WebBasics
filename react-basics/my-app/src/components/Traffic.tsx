import { useState } from "react";
import TrafficLight from "./TrafficLight";
import TrafficGraph from "./TrafficGraph";
import type { TrafficLightData } from "./TrafficLightInterface";
import { trafficLightsData } from "./TrafficLightInterface";

export default function Traffic() {
  const [selectedLight, setSelectedLight] = useState<TrafficLightData | null>(null);

  const placeholderData = [1, 1, 1, 2, 2, 3, 4, 6, 5, 4, 3, 2];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">Traffic</h1>
          <p className="text-gray-600 text-lg">Verkehrsampel Monitoring System</p>
        </div>

        <div className="flex gap-8">
          <div className="w-2/5">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Ampeln</h2>
              <p className="text-sm text-gray-500">Klicke auf eine Ampel für Details</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {trafficLightsData.map((light) => (
                <TrafficLight
                  key={light.id}
                  name={light.name}
                  state={light.state}
                  onClick={() => setSelectedLight(light)}
                  isSelected={selectedLight?.id === light.id}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            {selectedLight ? (
              <TrafficGraph
                name={selectedLight.name}
                data={selectedLight.graphData}
              />
            ) : (
              <TrafficGraph data={placeholderData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
