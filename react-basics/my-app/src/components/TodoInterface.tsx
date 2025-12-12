import { useEffect, useState } from "react";
import Todo from "./Todo";
import todosData from "../todos.json";

export default function TodoInterface() {
  const [todos, setTodos] = useState<
    { id: number; name: string; kommentar: string }[]
  >([]);

  useEffect(() => {
    setTodos(todosData);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Meine Todo-Liste</h1>

      <div className="flex flex-col items-center">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            kommentar={todo.kommentar}
          />
        ))}
      </div>
    </div>
  );
}
