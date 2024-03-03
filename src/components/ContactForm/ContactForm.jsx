import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const validation = Yup.object().shape({
    name: Yup.string()
        .min(3, "Not enough symbols!")
        .max(50, "Too long!")
        .required("Required field!"),
    number: Yup.string()
        .min(9, "Not enough symbols!")
        .max(9, "Too long!")
        .required("Required field!"),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const nameField = useId();
    const numberField = useId();
    
    const handleSubmit = (values, actions) => {
        dispatch(addContact({ ...values }));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={validation}
        >
            <Form className={css.form}>
                <div className={css.item}>
                    <label className={css.label} htmlFor={nameField}>Name</label>
                    <Field className={css.input} type="text" name="name" id={nameField} />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.item}>
                    <label className={css.label} htmlFor={numberField}>Phone</label>
                    <Field className={css.input} type="text" name="number" id={numberField} />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;