import { Car } from './car';
import { CarAPI } from './car-api';

export class Autogeschäft1CarAPI implements CarAPI {
  private cars: Car[] = [
    { id: 1, make: 'Volkswagen', model: 'Golf', year: 2022, color: 'Blau' },
    { id: 2, make: 'BMW', model: '3er', year: 2023, color: 'Schwarz' },
    { id: 3, make: 'Mercedes-Benz', model: 'C-Klasse', year: 2021, color: 'Silber' },
  ];

  getAllCars(): Car[] {
    console.log('Autogeschäft 1: Alle Autos werden zurückgegeben.');
    return this.cars;
  }

  findCars(searchText: string): Car[] {
    console.log(`Autogeschäft 1: Suche nach "${searchText}"...`);
    const lowerCaseSearchText = searchText.toLowerCase();
    
    return this.cars.filter(car =>
      car.make.toLowerCase().includes(lowerCaseSearchText) ||
      car.model.toLowerCase().includes(lowerCaseSearchText) ||
      car.color.toLowerCase().includes(lowerCaseSearchText)
    );
  }
}