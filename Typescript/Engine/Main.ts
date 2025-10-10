import { Engine } from "./Engine.ts";
import { Owner } from "./Owner.ts";

const myEngine = new Engine("BMW", 250, "PETROL");
const myOwner = new Owner("Jan", "Keckeis", 34, myEngine);


console.log(
  `${myOwner["firstName"]} ${myOwner["lastName"]} (${myOwner["age"]} Jahre) hat einen Motor von ${myEngine["manufacturer"]} mit ${myEngine["horsepower"]} PS (${myEngine["fuel"]}).`
);