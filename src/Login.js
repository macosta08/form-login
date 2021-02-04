import React, { useState } from "react";

export const Login = () => {
  const inicialStateLogin = {
    name: "",
    password: "",
  };
  const [login, setLogin] = useState(inicialStateLogin);
  const { name, password } = login;
  const handleInputLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    //setLogin({ ...login });
    console.log(login);
  };
  return (
    <div>
      <h1>Login</h1>
      <br />
      <h2>{name}</h2>
      <h3>{password}</h3>
      <form onSubmit={handleSubmitLogin}>
        <input
          onChange={handleInputLogin}
          type="text"
          placeholder="Name"
          name="name"
          value={login.name}
        />
        <br />
        <input
          onChange={handleInputLogin}
          type="password"
          placeholder="Password"
          name="password"
          value={login.password}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
