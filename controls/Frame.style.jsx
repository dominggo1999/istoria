import tw, { styled } from 'twin.macro';

export const FrameWrapper = styled.div`
  ${tw`
    pl-72
    w-full
    min-h-screen
  `}


  iframe{
    ${tw`
      w-full
      h-full
      p-10
    `}
  }
`;
