import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LogInForm.module.css";

const validation = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .required("Required field!"),
    password: Yup.string()
        .min(8, "Not enough symbols!")
        .max(24, "Too long!")
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required("Required field!"),
});


const LogInForm = () => {
    const dispatch = useDispatch();
    const emailField = useId();
    const passwordField = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn({ ...values }));
        actions.resetForm();
    };

    return (
        <div className={css.container}>
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
                        <label className={css.label} htmlFor={emailField}>Email</label>
                        <Field className={css.input} type="email" name="email" id={emailField} />
                        <ErrorMessage className={css.error} name="email" component="span" />
                    </div>
                    <div className={css.item}>
                        <label className={css.label} htmlFor={passwordField}>Password</label>
                        <Field className={css.input} type="password" name="password" id={passwordField} />
                        <ErrorMessage className={css.error} name="password" component="span" />
                    </div>
                    <button className={css.button} type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LogInForm;