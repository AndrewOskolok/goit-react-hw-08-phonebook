import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserOperation } from "../../redux/operation/userOperation";

const initialState = { name: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUserOperation(form));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={inputHandler}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={inputHandler}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={inputHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
