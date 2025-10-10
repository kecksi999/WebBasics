import { Engine } from "./Engine.ts";

export class Owner {
  private firstName: string;
  private lastName: string;
  private age: number;
  private engine: Engine;

  constructor(firstName: string, lastName: string, age: number, engine: Engine) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.engine = engine;
  }
}
