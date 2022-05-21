import React from 'react';
import { Logo, Input, Button, CenteredDiv } from 'components';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux-toolkit/features/userSlice';
import styles from 'styles/RegisterForm.module.css';

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    first_name: yup
      .string()
      .required('First name is required.')
      .max(30, 'First name cannot be more than 30 characters.'),
    last_name: yup
      .string()
      .required('Last name is required.')
      .max(30, 'Last name cannot be more than 30 characters.'),
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(8, 'Password needs to be at least 8 characters.'),
    confirmPassword: yup
      .string()
      .required('Please confirm your password.')
      .oneOf(
        [yup.ref('password'), null],
        'Passwords do not match. Please try again.'
      )
  });

  return (
    <CenteredDiv>
      <div className={styles.form}>
        <Logo className='mb-4' />
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            axios
              .post(API_ROUTES.REGISTER, {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword
              })
              .then((res) => {
                dispatch(login(res.data.user));
                localStorage.setItem('token', res.data.token);
              })
              .then(() => {
                navigate('/dashboard');
              })
              .catch((err) => {
                console.log(err);
              });
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                className='mb-4'
                label='First name'
                name='first_name'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                error={errors.first_name && touched.first_name}
                errorMessage={errors.first_name}
              />
              <Input
                className='mb-4'
                label='Last name'
                name='last_name'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                error={errors.last_name && touched.last_name}
                errorMessage={errors.last_name}
              />
              <Input
                className='mb-4'
                label='Email'
                name='email'
                type='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
                errorMessage={errors.email}
              />
              <Input
                className='mb-4'
                label='Password'
                name='password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
                errorMessage={errors.password}
                autocomplete='on'
              />
              <Input
                className='mb-4'
                label='Confirm password'
                name='confirmPassword'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={errors.confirmPassword && touched.confirmPassword}
                errorMessage={errors.confirmPassword}
                autocomplete='on'
              />
              {/* implement consent - https://itnext.io/simple-react-form-validation-with-formik-yup-and-or-spected-206ebe9e7dcc */}
              <Button
                type='submit'
                disabled={isSubmitting}
                className='mt-4'
                text='Register'
              />
            </form>
          )}
        </Formik>
      </div>
    </CenteredDiv>
  );
};
