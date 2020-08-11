import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleContact.module.css";
import { useDispatch } from "react-redux";
import { deleteUserOption } from "../../redux/operation/contactsOperation";

const SingleContact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const userDeleteHandle = (id) => {
    dispatch(deleteUserOption(id));
  };

  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button
        className={styles.contactButton}
        onClick={() => userDeleteHandle(id)}
      >
        X
      </button>
    </li>
  );
};

SingleContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SingleContact;
