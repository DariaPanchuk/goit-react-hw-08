import { FiPhone, FiUser } from "react-icons/fi";
import css from './Contact.module.css';

const Contact = ({ contact: { name, number }, openDeleteModal, openPatchModal }) => {
    return (
        <div className={css.item}>
            <div className={css.info}>
                <p className={css.name}><FiUser className={css.icon} /> {name}</p>
                <p className={css.number}><FiPhone className={css.icon} /> {number}</p>
            </div>
            <div className={css.buttons}>
                <button className={css.button} onClick={() => {openDeleteModal()}}>Delete</button>
                <button className={css.button} onClick={() => {openPatchModal()}}>Edit</button>
            </div>
        </div>
    );
};

export default Contact;