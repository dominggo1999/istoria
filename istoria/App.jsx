import React from 'react';
import Controls from '../controls/Controls';

const stories = import.meta.globEager('../**/*.stories.{js,jsx,ts,tsx}');

const App = () => {
  return (
    <Controls stories={stories} />
  );
};

export default App;
