import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button onClick={onClick} className="btn btn-primary mt-2">
        set focus
      </button>
    </>
  );
};
