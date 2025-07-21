import React from "react";

export const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="What do you next?"
        className="form-control"
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  );
};
