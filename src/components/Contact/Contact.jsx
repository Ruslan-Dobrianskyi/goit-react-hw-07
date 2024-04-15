import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.item}>
      <FaUser /> {contact.name}
      <FaPhoneAlt />
      {contact.number}
      <button className={s.button} onClick={() => onDelete(contact.id)}>
        <MdDeleteForever style={{ width: "30px", height: "30px" }} />
      </button>
    </li>
  );
};

export default Contact;
