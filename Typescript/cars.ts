interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    { brand: "BMW", model: "X5", price: 60000, year: 2023 },
    { brand: "Audi", model: "A4", price: 40000, year: 2021 },
    { brand: "Tesla", model: "Model 3", price: 50000, year: 2022 },
    { brand: "Mercedes", model: "C-Class", price: 45000, year: 2020 },
    { brand: "Volkswagen", model: "Golf", price: 30000, year: 2019 },
];


let totalPrice = 0;
for (let i = 0; i < cars.length; i++) {
    totalPrice += cars[i].price;
}
console.log("Total Price");
console.log(totalPrice);


console.log("All Cars");
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].brand + " " + cars[i].model + " (" + cars[i].year + ") - €" + cars[i].price);
}


console.log("Expensive Cars");
for (let i = 0; i < cars.length; i++) {
    if (cars[i].price > 45000) {
        console.log(cars[i].brand + " " + cars[i].model + " - €" + cars[i].price);
    }
}
