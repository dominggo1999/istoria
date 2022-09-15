import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import Sandbox from '../../sandbox/Renderer';

const stories = import.meta.globEager('../../**/*.stories.{js,jsx,ts,tsx}');

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased 
      relative
      w-full 
    `}
    font-size:100%;
  }
`;

const Wrapper = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
      {children}
    </>
  );
};

const App = () => {
  return (
    <Sandbox
      stories={stories}
      wrapper={Wrapper}
    />
  );
};

export default App;
