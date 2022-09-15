import React from 'react';
import tw, { styled } from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`
    px-2 
    py-1 
    rounded-sm 
    bg-red-500
  `}
`;

const Button = ({ text }) => {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  );
};

export default Button;
