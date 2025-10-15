import { Car } from './car';
import { CarAPI } from './car-api';

export class AnderesAutogeschäftCarAPI implements CarAPI {
  private cars: Car[] = [
    { id: 101, make: 'Audi', model: 'A4', year: 2023, color: 'Weiß' },
    { id: 102, make: 'Ford', model: 'Mustang', year: 2020, color: 'Rot' },
    { id: 103, make: 'Tesla', model: 'Model 3', year: 2023, color: 'Grau' },
    { id: 104, make: 'Audi', model: 'Q5', year: 2022, color: 'Schwarz' },
  ];

  getAllCars(): Car[] {
    console.log('Anderes Autogeschäft: Alle Autos werden zurückgegeben.');
    return this.cars;
  }

  findCars(searchText: string): Car[] {
    console.log(`Anderes Autogeschäft: Suche nach "${searchText}"...`);
    const lowerCaseSearchText = searchText.toLowerCase();

    return this.cars.filter(car =>
      Object.values(car).some(value =>
        String(value).toLowerCase().includes(lowerCaseSearchText)
      )
    );
  }
}