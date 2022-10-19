import React from 'react';
import { findActiveStory } from './util/findActiveStory';
import useActiveStory from './hooks/useActiveStory';
import './Renderer.css';

const Renderer = ({ stories, wrapper: Wrapper }) => {
  const { storyId, variantId } = useActiveStory();
  const { args, component: Component } = findActiveStory(stories, storyId, variantId) || {};

  return (
    <>
      {
        args && Component && (
          <Wrapper>
            <Component {...args} />
          </Wrapper>
        )
      }
    </>
  );
};

export default Renderer;
