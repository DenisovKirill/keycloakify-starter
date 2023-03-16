import { css } from '@emotion/react';

const styles = {
  formInput: css`
    margin-bottom: 10px;
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: #fff;
      -webkit-box-shadow: 0 0 0px 1000px #000 inset;
      box-shadow: 0 0 0 30px rgba(0, 0, 0, 0) inset !important;
      transition: background-color 5000s ease-in-out 0s;
    }
    .MuiInput-input {
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.2px;
    }
    .MuiInput-root:after {
      border-bottom: 1px solid #ced4da;
    }
    .MuiInputLabel-root.Mui-focused,
    .MuiInputLabel-root {
      color: #ced4da;
      opacity: 0.4;
    }
    .MuiFormHelperText-root {
      position: absolute;
      bottom: -25px;
      font-size: 12px;
    }
  `,
};

export default styles;
