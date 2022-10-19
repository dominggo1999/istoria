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
    py-2
    overflow-y-auto
    bg-[#E4E4E7]
  `}

  span.storyname{
    ${tw`
      px-4
      mb-1
    `}
  }

  a.storylink{
    ${tw`
      inline-block
      w-full
    `}
  }

  li{
    ${tw`
      px-4
    `}
  }

  li.active{
    ${tw`
      text-blue-700
      font-semibold
      bg-[#d2d2db]
    `}
  }
`;
