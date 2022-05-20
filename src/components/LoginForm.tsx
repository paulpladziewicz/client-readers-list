import React from 'react';
import { useNavigate } from "react-router-dom";
import { Logo, Input, Button, CenteredDiv } from 'components';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useDispatch } from 'react-redux';
import { login } from 'redux-toolkit/features/userSlice';

const validationSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address.').required('Email is required'),
  password: yup.string().required('Password is required')
});

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CenteredDiv>
      <div style={{width: '300px'}}>
        <Logo className='mb-4' />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            axios
              .post(API_ROUTES.LOGIN, {
                email: data.email,
                password: data.password
              })
              .then((res) => {
                localStorage.setItem('token', res.data.token);
                dispatch(login(res.data.user));
                navigate("/");
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
              />
              <Button
                type='submit'
                disabled={isSubmitting}
                className='mt-4'
                text='Login'
              />
            </form>
          )}
        </Formik>
      </div>
      </CenteredDiv>
  );
};
