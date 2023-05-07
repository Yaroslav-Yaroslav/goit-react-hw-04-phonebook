import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, ErrorMessage, FormField, Button } from './ContactForm.styled';

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'The max number of characters is 30!')
    .required('Enter a name'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Enter a phone number'),
});
export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm({ values: { name: '', number: '' } });
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="p" />
        </FormField>
        <FormField>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="p" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
