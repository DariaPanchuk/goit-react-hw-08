import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LogInForm.module.css";

const validation = Yup.object().shape({
    name: Yup.string()
        .min(3, "Not enough symbols!")
        .max(50, "Too long!")
        .required("Required field!"),
    email: Yup.string()
        .email("Must be a valid email")
        .required("Required field!"),
});

const LogInForm = () => {
    const dispatch = useDispatch();
    const nameField = useId();
    const emailField = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn({ ...values }));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
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
                    <label className={css.label} htmlFor={emailField}>Email</label>
                    <Field className={css.input} type="email" name="email" id={emailField} />
                    <ErrorMessage className={css.error} name="email" component="span" />
                </div>
                <button className={css.button} type="submit">Log In</button>
            </Form>
        </Formik>
    )
}

export default LogInForm;