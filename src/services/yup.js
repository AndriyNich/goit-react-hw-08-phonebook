import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const AuthSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

export const RegisterSchema = Yup.object().shape({
  login: Yup.string().required().min(6),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});
