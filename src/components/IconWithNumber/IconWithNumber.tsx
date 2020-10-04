import React, { ReactNode, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Span } from 'styled-typography';

interface IconWithNumberProps {
  number: number;
  children: ReactNode;
}

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  & span {
    font-family: 'Goldplay-SemiBold';
  }
`;

const IconWithNumber = ({ number, children }: IconWithNumberProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <IconContainer className="iconContent">
      {children}
      <Span level={5} color={themeContext.activeTheme.color1}>
        {number}
      </Span>
    </IconContainer>
  );
};

export default IconWithNumber;
