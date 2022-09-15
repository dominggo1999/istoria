import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createNavigation } from './util/createNavigation';
import Navigation from './Navigation';
import { ControlsWrapper } from './Controls.style';
import GlobalStyles from './styles/GlobalStyles';
import Frame from './Frame';

const Controls = ({ stories }) => {
  const navigationList = createNavigation(stories);

  return (
    <BrowserRouter basename="/istoria">
      <Routes>
        <Route
          path="/"
          element={(
            <ControlsWrapper>
              <GlobalStyles />
              <Navigation list={navigationList} />
              <Frame />
            </ControlsWrapper>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Controls;
