export interface TrafficLightData {
  id: number;
  name: string;
  state: 1 | 2 | 3;
  graphData: number[];
}

export const trafficLightsData: TrafficLightData[] = [
  {
    id: 1,
    name: "Bärenkreuzung Feldkirch",
    state: 1,
    graphData: [2, 1, 1, 1, 2, 3, 5, 7, 6, 4, 3, 2]
  },
  {
    id: 2,
    name: "Hauptstraße Dornbirn",
    state: 2,
    graphData: [1, 1, 1, 2, 2, 3, 4, 6, 6, 5, 4, 3]
  },
  {
    id: 3,
    name: "Rheinstraße Bregenz",
    state: 3,
    graphData: [2, 2, 2, 3, 3, 4, 6, 8, 8, 6, 5, 4]
  },
  {
    id: 4,
    name: "Montfortstraße Rankweil",
    state: 1,
    graphData: [1, 1, 1, 2, 2, 3, 4, 6, 5, 4, 3, 2]
  }
];
