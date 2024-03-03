import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

const validation = Yup.object().shape({
    name: Yup.string()
        .min(3, "Not enough symbols!")
        .max(50, "Too long!")
        .required("Required field!"),
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

const RegisterForm = () => {
    const dispatch = useDispatch();
    const nameField = useId();
    const emailField = useId();
    const passwordField = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: ""
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
                <div className={css.item}>
                    <label className={css.label} htmlFor={passwordField}>Password</label>
                    <Field className={css.input} type="password" name="password" id={passwordField} />
                    <ErrorMessage className={css.error} name="password" component="span" />
                </div>
                <button className={css.button} type="submit">Register</button>
            </Form>
        </Formik>
    )
}

export default RegisterForm;


// {
//   type: 'auth/register/pending',
//   meta: {
//     arg: {
//       name: 'test',
//       email: 'test@email.com',
//       password: 'V!3UDue..87mqsZ'
//     },
//     requestId: 'BfKN-NAhc4JaY2AcXH1mD',
//     requestStatus: 'pending'
//   }
// }

    //   name: 'rwest4d5gyhuoj9i',
    //   email: 'testiemestie@email.com',
//   password: 'V!3UDue..87mqsZ'
    
    //   name: 'y5r6tfu6i',
    //   email: 'blahblahblah@gmail.com',
//   password: ']rhgdytuturtuduf6tutfT'
    

//    name: 'aserftdyeryhtfh',
//     email: 'dgdsferdgsedf@gmail.com'