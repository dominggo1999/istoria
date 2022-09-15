import tw, { styled } from 'twin.macro';

export const FrameWrapper = styled.div`
  ${tw`
    pl-72
    w-full
  `}


  iframe{
    ${tw`
      w-full
    `}
  }
`;
