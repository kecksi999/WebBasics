import { useEffect } from "react";
import { WeatherStation } from "./WeatherStation.ts";
import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay.ts";
import { ForecastDisplay } from "./ForecastDisplay.ts";
import { StatisticsDisplay } from "./StaticDisplay.ts";

export default function App() {
  useEffect(() => {
    const station = new WeatherStation();

    station.addObserver(new CurrentConditionsDisplay());
    station.addObserver(new ForecastDisplay());
    station.addObserver(new StatisticsDisplay());

    station.setTemperature(25);
    station.setTemperature(30);
  }, []);


}