import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "nosar",
    email: "nosar@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("useEffect called");
  }, []);

  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    //console.log("email changed");
  }, [email]);

  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "nosar2" && <Message />}

      <input
        className="form-control mt-2"
        type="email"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      
    </>
  );
};
