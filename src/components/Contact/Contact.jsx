import { useState } from 'react';
import { FiPhone, FiUser } from "react-icons/fi";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import css from './Contact.module.css';

const Contact = ({ contact: { name, number }, onClick }) => {
    const [load, setLoad] = useState(false);

    return (
        <div className={css.item}>
            <div className={css.info}>
                <p className={css.name}><FiUser className={css.icon} /> {name}</p>
                <p className={css.number}><FiPhone className={css.icon} /> {number}</p>
            </div>
            <div className={css.buttons}>
                <button className={css.button} onClick={() => {onClick(), setLoad(true)}}>{load ? <ButtonLoader/> : "Delete"}</button>
                <button className={css.button} onClick={() => {onClick()}}>Edit</button>
            </div>
        </div>
    );
};

export default Contact;