import Contact from "../Contact/Contact";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { deleteContactThunk } from "../../redux/contactsOps";
import { selectFilteredContactsMemo } from "../../redux/selectors";
const ContactList = () => {
  const contacts = useSelector(selectFilteredContactsMemo);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <div className={s.list}>
      {[...contacts].reverse().map((contact) => (
        <ul key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
