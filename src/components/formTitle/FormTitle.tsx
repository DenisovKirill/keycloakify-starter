/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { css } from '@emotion/react';

const FormTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    css={css`
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
    `}
    variant="h1"
    align="center"
  >
    {children}
  </Typography>
);

export default FormTitle;
