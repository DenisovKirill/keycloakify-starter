/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './formInputStyles';

interface IFormInput {
  placeholder?: string;
  name?: any;
  type?: string;
  formik: any;
  id?: number | string;
  // check formik type
  autoFocus?: boolean;
  label?: string;
  value?: any;
  onChange?: any;
}

const FormInput: React.FC<IFormInput> = ({
  placeholder,
  name,
  type,
  formik,
  autoFocus = false,
  label = name[0].toUpperCase() + name.slice(1),
  value,
  onChange,
}) => {
  const { getFieldProps, touched, errors } = formik;
  const { formInput } = styles;

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      placeholder={placeholder}
      css={formInput}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
      variant="standard"
      focused
      margin="normal"
      fullWidth
      id={name}
      name={name}
      label={label}
      type={showPassword ? 'text' : type}
      {...getFieldProps(name)}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && errors[name]}
      InputProps={{
        endAdornment:
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton onClick={handleClick} edge="end">
                {showPassword ? (
                  <Visibility color="primary" />
                ) : (
                  <VisibilityOff color="primary" />
                )}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    />
  );
};

export default FormInput;
