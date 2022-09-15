import tw, { styled } from 'twin.macro';

export const AvatarWrapper = styled.div`
  ${tw`
    w-24 
    h-24
    overflow-hidden
  `}

  ${({ variant }) => {
    switch (variant) {
      case 'square':
        return tw`rounded-none`;
      case 'border':
        return tw`border-4 border-black rounded-full`;
      default:
        return tw`rounded-full`;
    }
  }}
  img{
    ${tw`
      object-cover
      object-center
      w-full 
      h-full 
    `}
  }
`;
