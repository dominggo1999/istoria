import tw, { styled } from 'twin.macro';

export const NavigationWrapper = styled.nav`
  ${tw`
    flex 
    flex-col 
    fixed 
    min-h-screen 
    top-0 
    bottom-0 
    w-72
    px-4
    py-2
    overflow-y-auto
    bg-[#E4E4E7]
  `}
`;
