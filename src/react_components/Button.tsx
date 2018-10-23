import * as React from 'react';
import { styled } from '../../styled/styled_components';

const StyledButton = styled<{ color: string }, 'button'>('button')`
  background: white;
  color: ${props => props.color};
`;

const Button: React.SFC<{
  color: string;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ color, onClick, children }) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);

export { Button };
