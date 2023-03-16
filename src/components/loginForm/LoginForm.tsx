/** @jsxImportSource @emotion/react */
import React, {useState, useEffect, ReactNode, FormEventHandler} from 'react';
import { useFormik } from 'formik';
import { animated, useTransition } from 'react-spring';

import { Typography } from '@mui/material';
import { SerializedStyles } from '@emotion/react';

import FormInput from '../formInput/FormInput';
import FormButton from '../formButton/FormButton';
import FormTitle from '../formTitle/FormTitle';
import { loginValidationSchema } from '../../validation/validationSchema';
import style from './loginFormStyles';
import animations from '../../animations/animations';

import logoImg from '../../assets/logo.svg';

interface ILoginFormInitialValues {
  email: string;
  password: string;
}

interface ILoginForm {
  id?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  loginAction: string;
  isLoginButtonDisabled: boolean
}
const LoginForm: React.FC<ILoginForm> = ({ onSubmit, loginAction, isLoginButtonDisabled }) => {
  const [nextInput, setNextInput] = useState(false);

  const { holder, notation, signUpLink } = style;

  const initialValues: ILoginFormInitialValues = {
    email: '',
    password: '',
  };

  // eslint-disable-next-line
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async () => {
      setShow(false);
    },
  });

  const { resetForm, errors } = formik;

  const goToNextInput = () => {
    if (!errors.email) {
      setNextInput(true);
    }
  };

  // const toRegistration = () => {
  //   setShow(false);
  //   setTimeout(goToRegistration, 1000);
  // };

  const [show, setShow] = useState(true);

  const transitions = useTransition(show, animations.flippingTransitionAnimation);

  const goToFirstInput = (event: any) => {
    if (event.code === 'Escape') {
      setNextInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', goToFirstInput);
    return () => document.removeEventListener('keydown', goToFirstInput);
  }, []);

  const animate = (element: ReactNode, css?: SerializedStyles) => transitions(
    (styles, item) => item && (
      <animated.div css={css} style={styles}>
        {element}
      </animated.div>
    )
  );

  return (
    <>
      {animate(
        <>
          <FormTitle>Login to</FormTitle>
          <img src={logoImg} alt="logo" />
        </>,
        holder
      )}
      {animate(
        <form onSubmit={onSubmit} action={loginAction} method="post">
          {!nextInput && (
            <>
              <FormInput name="email" formik={formik} autoFocus label="Login" />
              <FormButton text="Continue" type="button" onClick={goToNextInput} />
            </>
          )}
          {nextInput && (
            <>
              <FormInput name="password" type="password" formik={formik} autoFocus />
              <FormButton text="Login" type="submit" disabled={isLoginButtonDisabled} />
            </>
          )}
        </form>
      )}
      {/*{animate(*/}
      {/*  <>*/}
      {/*    <Typography css={notation} align="center">*/}
      {/*      Don&apos;t have an account?*/}
      {/*    </Typography>*/}
      {/*    <Typography css={signUpLink} onClick={() => toRegistration()}>*/}
      {/*      Sign up*/}
      {/*    </Typography>*/}
      {/*  </>*/}
      {/*)}*/}
    </>
  );
};

export default LoginForm;
