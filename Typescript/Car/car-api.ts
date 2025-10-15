import { Car } from './car';

export interface CarAPI {
  /**
   * Gibt alle verfügbaren Autos zurück.
   */
  getAllCars(): Car[];

  /**
   * Findet Autos, die dem Suchtext entsprechen.
   * @param searchText Der Text, nach dem in den Autodaten gesucht wird.
   */
  findCars(searchText: string): Car[];
}