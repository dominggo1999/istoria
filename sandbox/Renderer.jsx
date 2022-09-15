import React from 'react';
import { findActiveStory } from './util/findActiveStory';
import useActiveStory from './hooks/useActiveStory';

const Renderer = ({ stories, wrapper: Wrapper }) => {
  const { storyId, variantId } = useActiveStory();
  const { args, component: Component } = findActiveStory(stories, storyId, variantId) || {};

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
