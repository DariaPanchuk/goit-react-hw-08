import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from "../redux/contacts/operations";
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false)
    
    const dispatch = useDispatch();

    useEffect(() => {
        setLoad(true);
        dispatch(fetchContacts()).unwrap()
            .then(setLoad(false))
            .catch(setError(true));
    }, [dispatch]);

    return (
        <div>
            <DocumentTitle>Home</DocumentTitle>
            {load && <Loader />}
            {error && <ErrorMessage />}
            <ContactForm />
            <SearchBox />
            <ContactList  />
        </div>
    )
}