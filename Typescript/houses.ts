interface House {
    location: string;
    size: number; // in m²
    price: number;
    yearBuilt: number;
}

const houses: House[] = [
    { location: "Vienna", size: 120, price: 450000, yearBuilt: 2015 },
    { location: "Salzburg", size: 95, price: 380000, yearBuilt: 2018 },
    { location: "Graz", size: 150, price: 520000, yearBuilt: 2020 },
    { location: "Linz", size: 80, price: 300000, yearBuilt: 2010 },
    { location: "Innsbruck", size: 130, price: 480000, yearBuilt: 2019 },
];

let totalPrice = 0;
for (let i = 0; i < houses.length; i++) {
    totalPrice += houses[i].price;
}
console.log("Total Price of All Houses");
console.log("€" + totalPrice);

console.log("All Houses");
for (let i = 0; i < houses.length; i++) {
    console.log(
        houses[i].location + " - " + 
        houses[i].size + "m² (" + 
        houses[i].yearBuilt + ") - €" + 
        houses[i].price
    );
}

console.log("Expensive Houses (over €450,000)");
for (let i = 0; i < houses.length; i++) {
    if (houses[i].price > 450000) {
        console.log(houses[i].location + " - €" + houses[i].price);
    }
}
