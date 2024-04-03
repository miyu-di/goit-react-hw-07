import css from "./Contact.module.css";

import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div>
        <p className={css.name}>
          <MdPerson className={css.person} />
          {contact.name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.phone} />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(contact))}>Delete</button>
    </div>
  );
};
