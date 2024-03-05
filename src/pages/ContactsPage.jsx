import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from "../redux/contacts/operations";
import { deleteContact, patchContact } from '../redux/contacts/operations';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import DeleteModal from '../components/DeleteModal/DeleteModal';
import PatchModal from '../components/PatchModal/PatchModal';

export default function ContactsPage() {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        setLoad(true);
        setError(false);
        dispatch(fetchContacts()).unwrap()
            .then(() => setLoad(false))
            .catch(() => setError(true));
    }, [dispatch]);

    const handleDelete = (selectedItem) => {
        dispatch(deleteContact(selectedItem))
    };

    const handlePatch = (selectedItem) => {
        dispatch(patchContact(selectedItem));
    };

    function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
    }

    function afterOpenModal() {
    document.body.style.overflow = "hidden";
    }

    function closeModal() {
    document.body.style.overflow = "scroll";
    setIsOpen(false);
    }

    return (
        <div>
            <DocumentTitle>Home</DocumentTitle>
            {load && <Loader />}
            {error && <ErrorMessage />}
            <ContactForm />
            <SearchBox />
            <ContactList onClick={openModal} />
            {selectedItem && <DeleteModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} selectedItem={selectedItem} handleDelete={handleDelete} />}
            {selectedItem && <PatchModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} selectedItem={selectedItem} handlePatch={handlePatch} />}
        </div>
    )
}