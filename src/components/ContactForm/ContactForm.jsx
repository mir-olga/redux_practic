import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required field!')
    .min(3, 'Name must be at least 3 symb long')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .required('Required field!')
    .min(7, 'Phone number must be at least 7 symb long')
    .max(15, 'Too Long!'),
});

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(addContact({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off" className={css.formAll}>
        <div className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={css.input} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.form}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
