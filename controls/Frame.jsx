import React from 'react';
import { FrameWrapper } from './Frame.style';

import useFrameUrl from './hooks/useFrameUrl';

const Frame = () => {
  const frameUrl = useFrameUrl();

  return (
    <FrameWrapper>
      <iframe
        src={frameUrl}
        frameBorder="0"
        title="Sandbox"
      >
      </iframe>
    </FrameWrapper>
  );
};

export default Frame;
