import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: "Recolectar la piedra del alma",
      done: false,
    },

    {
      id: new Date().getTime() * 3,
      description: "Recolectar la piedra del tiempo",
      done: false,
    },
  ];

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        TodoApp (10), <small>Slope: 3</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={initialState} />
        </div>

        <div className="col-5">
          <h4>New TODO</h4>
          <hr />
          <TodoAdd />
        </div>
      </div>
    </>
  );
};
