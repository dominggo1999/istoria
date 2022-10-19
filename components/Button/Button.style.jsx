import tw, { styled } from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`
    px-2 
    bg-blue-400
    py-1  
    rounded-sm
  `}

  ${({ variant }) => {
    switch (variant) {
      case 'danger':
        return tw`bg-red-400`;
      case 'green':
        return tw`bg-green-400`;
      case 'purple':
        return tw`bg-purple-400`;
      case 'yellow':
        return tw`bg-yellow-400`;
      default:
        break;
    }
  }}
`;
