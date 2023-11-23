"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="mx-auto flex flex-col items-center px-20 py-3 sm:items-start">
      <h1 className="mb-10 text-6xl text-purple-500">Counter</h1>
      <div className="mt-2 flex gap-8">
        <button className="btn btn-primary" onClick={decrement}>
          Decrement
        </button>
        <p className="flex flex-col items-center text-xl text-purple-300">
          Count: <span className="block text-lg">{count}</span>
        </p>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
};
export default ClientPage;
