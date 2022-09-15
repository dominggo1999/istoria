import React, { useState, useLayoutEffect } from 'react';
import queryString from 'query-string';

const useActiveStory = () => {
  const [storyId, setStoryId] = useState();
  const [variantId, setVariantId] = useState();

  const findActiveStory = (event) => {
    if (window.location.origin === event.origin) {
      if (event.data) {
        const { storyId, variantId } = event.data;

        setStoryId(storyId);
        setVariantId(variantId);
      }
    }
  };

  useLayoutEffect(() => {
    const { storyId, variantId } = queryString.parse(window.location.search);

    if (!storyId || !variantId) {
      window.addEventListener('message', findActiveStory, false);
    } else {
      setStoryId(storyId);
      setVariantId(variantId);
    }

    return () => {
      window.removeEventListener('message', findActiveStory, false);
    };
  }, []);

  return { storyId, variantId };
};

export default useActiveStory;
