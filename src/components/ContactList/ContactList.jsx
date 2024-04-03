import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

const renderContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filterName.toLowerCase())
);

  return (
    <ul className={css.list}>
      {renderContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
