import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserOperation } from "../../redux/operation/userOperation";

const initialState = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserOperation(form));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={form.email}
        onChange={inputHandler}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={inputHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
