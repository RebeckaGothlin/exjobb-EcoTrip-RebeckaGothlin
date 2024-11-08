import styled from 'styled-components';
import { SpinnerCircular } from 'spinners-react';

export const StyledSpinner = styled(SpinnerCircular).attrs(() => ({
  color: "#00ff9d",
}))`
  margin: 20px auto;
  display: block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
