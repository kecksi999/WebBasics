interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    { brand: "BMW", model: "X5", price: 60000, year: 2023 },
    { brand: "Audi", model: "A4", price: 40000, year: 2021 },
    { brand: "Tesla", model: "Model 3", price: 51000, year: 2022 },
    { brand: "Mercedes", model: "C-Class", price: 45000, year: 2020 },
    { brand: "Volkswagen", model: "Golf", price: 30000, year: 2019 },
];




//-----------
// Wichtigste Array 
//-------------

// -------------------------
// 1. map – neues Array aus Marken
// -------------------------
const carBrands: string[] = cars.map(car => car.brand);
console.log("Car Brands:", carBrands);


// -------------------------
// 6. sort – Autos nach Preis aufsteigend
// -------------------------
const carsByPrice = [...cars].sort((a, b) => a.price - b.price);
console.log("Cars sorted by price:", carsByPrice);



// --------------------
// 7. filter - Filtert alle Autos die über 50k sind
// --------------------
const FilterExpensive = cars.filter(car => car.price >= 50000);
console.log("Every expensive Car:", FilterExpensive);




// -------------------------
// 2. find – erstes Auto über 50000
// -------------------------
const expensiveCar = cars.find(car => car.price > 50000);
console.log("First expensive car:", expensiveCar);

// -------------------------
// 3. reduce – Gesamtpreis aller Autos
// -------------------------
const totalPriceCar = cars.reduce((sum, car) => sum + car.price, 0);
console.log("Total price:", totalPriceCar);

// -------------------------
// 4. some – gibt es ein Auto unter 35000?
// -------------------------
const hasCheapCars = cars.some(car => car.price < 35000);
console.log("Is there any cheap car?", hasCheapCars);

// -------------------------
// 5. every – sind alle Autos teurer als 25000?
// -------------------------
const allExpensive = cars.every(car => car.price > 25000);
console.log("Are all cars expensive?", allExpensive);


