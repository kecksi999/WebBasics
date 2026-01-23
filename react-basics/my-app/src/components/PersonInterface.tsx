import { useEffect, useState } from "react";
import Person from "./Person";
import personsData from "../persons.json";

export default function PersonInterface() {
  const [persons, setPersons] = useState<
    { id: number; name: string; beruf: string; alter: number }[]
  >([]);

  useEffect(() => {
    setPersons(personsData);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Personen-Liste</h1>

      <div className="flex flex-col items-center">
        {persons.map((person) => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            beruf={person.beruf}
            alter={person.alter}
          />
        ))}
      </div>
    </div>
  );
}
