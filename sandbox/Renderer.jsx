import React from 'react';
import { findActiveStory } from './util/findActiveStory';

const Renderer = ({ stories, wrapper: Wrapper }) => {
  const { args, component: Component } = findActiveStory(stories) || {};

  return (
    <div>
      {
        args && Component && (
          <Wrapper>
            <Component {...args} />
          </Wrapper>
        )
      }

    </div>
  );
};

export default Renderer;
