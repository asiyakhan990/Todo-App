"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  //Add todo section.
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue("");
  };

  //Add value id.
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Delete todo section.
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-purple-900 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-serif">Todo List App by Asiya Khan</h1>
          <p className="font-serif mt-3">
            Organized your work with our Todo List App. 
          </p>
        </div>
      </header>

      <main className="flex-grow items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-purple-400 rounded-lg shadow-md mt-40">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-2 border border-grey-400 rounded-lg"
                placeholder="Add a new task ......"
              />
              <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-pink-500 text-black rounded-lg hover:bg-pink-700"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-2 border border-pink-600 rounded-lg ${
                  todo.completed ? "bg-pink-900 line-through" : "bg-purple-200"
                }`}
              >
                <span>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="px-2 py-1 text-sm bg-pink-500 rounded-lg hover:bg-pink-700"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2 py-1 text-sm bg-pink-500 rounded-lg hover:bg-pink-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
