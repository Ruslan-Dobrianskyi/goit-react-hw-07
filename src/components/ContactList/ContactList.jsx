import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filterSlice";

import s from "./ContactList.module.css";
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilter);

  const getFilteredUsers = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };
  const filteredContacts = getFilteredUsers();

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.list}>
      {filteredContacts.reverse().map((filteredContact) => (
        <ul key={filteredContact.id}>
          <Contact contact={filteredContact} onDelete={handleDelete} />
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
