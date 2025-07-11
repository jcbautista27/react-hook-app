import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const { formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;


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

      <input
        className="form-control mt-2"
        type="email"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        className="form-control mt-2"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
