/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '@mui/material/Button';
import style from './formButtonStyles';

interface IFormButton {
  text: string;
  type?: 'submit' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  // onClick?: () => void;
}

const FormButton: React.FC<IFormButton> = ({
  text, type, disabled, onClick
}) => {
  const { formButton } = style;
  return (
    <Button
      css={formButton}
      disabled={disabled}
      variant="contained"
      fullWidth
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default FormButton;
