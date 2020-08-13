import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddContact.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postUserOperation } from "../../redux/operation/contactsOperation";

const Phonebook = ({ setShowAlert }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.items);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const inputName = ({ target }) => {
    setName(target.value);
  };

  const inputNumber = ({ target }) => {
    setNumber(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      setShowAlert({ status: true, text: "Contact already exist" });
      setTimeout(() => {
        setShowAlert({ status: false, text: "" });
      }, 2000);
      return;
    }

    if (name.length < 2) {
      setShowAlert({ status: true, text: "Name mast content 2 characters" });

      setTimeout(() => {
        setShowAlert({ status: false, text: "" });
      }, 2000);
      return;
    }

    const user = { name: name, number: number };
    dispatch(postUserOperation(user, token));

    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={inputName}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="number"
        placeholder="Nubmer"
        value={number}
        onChange={inputNumber}
      ></input>
      <button className={styles.button} type="submit">
        Add contacts
      </button>
    </form>
  );
};

Phonebook.propTypes = {
  setShowAlert: PropTypes.func.isRequired,
};

export default Phonebook;
