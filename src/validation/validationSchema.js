import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const registrationValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  organization: yup.string().required('Organization is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  zipcode: yup.number().typeError('Zipcode must be a number').required('Zipcode is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
