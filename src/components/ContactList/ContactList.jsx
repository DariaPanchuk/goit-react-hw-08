import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

const ContactList = ({onClick}) => {
    const contacts = useSelector(selectVisibleContacts);

    return (
        <ul className={css.list}>
            {
                contacts.map(contact => (
                    <li key={contact.id}>
                        <Contact contact={contact} onClick={() => onClick(contact.id)}/>
                    </li>
                ))
            }
        </ul>
    );
};

export default ContactList;