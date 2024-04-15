import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";
// import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
// import { addNewContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const dispatch = useDispatch();

  // const addContact = (contact) => {
  //   dispatch(addNewContact(contact));
  // };

  const handleSubmit = (data, options) => {
    const newData = {
      ...data,
      id: nanoid(),
    };

    dispatch(addContactThunk(newData));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={s.error} name="name" component="span" />

        <label className={s.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.input}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
