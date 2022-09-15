import React, { useLayoutEffect } from 'react';
import queryString from 'query-string';
import { FrameWrapper } from './Frame.style';
import { messageSandbox } from './util/messageSandBox';

const Frame = () => {
  useLayoutEffect(() => {
    const sandboxIframe = document.getElementById('sandbox-frame');

    sandboxIframe.onload = () => {
      const { storyId, variantId } = queryString.parse(window.location.search);
      messageSandbox({ storyId, variantId });
    };
  }, []);

  return (
    <FrameWrapper>
      <iframe
        src={`${window.location.origin}/istoria/sandbox/`}
        id="sandbox-frame"
        frameBorder="0"
        title="Sandbox"
      >
      </iframe>
    </FrameWrapper>
  );
};

export default Frame;
