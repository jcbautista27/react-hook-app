import React from "react";

export const TodoItem = ({todo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo}</span>
      <button className="btn btn-outline-danger">Quit</button>
    </li>
  );
};
