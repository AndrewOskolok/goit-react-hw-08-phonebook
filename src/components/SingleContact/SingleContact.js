import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleContact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserOption } from "../../redux/operation/contactsOperation";

const SingleContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const userDeleteHandle = (id, token) => {
    dispatch(deleteUserOption(id, token));
  };

  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button
        className={styles.contactButton}
        onClick={() => userDeleteHandle(id, token)}
      >
        X
      </button>
    </li>
  );
};

SingleContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SingleContact;
