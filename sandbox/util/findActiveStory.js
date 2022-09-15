import queryString from 'query-string';

export const findActiveStory = (stories, storyId, variantId) => {
  let activeStory;

  if (storyId && variantId) {
    Object.keys(stories).forEach((key) => {
      const { meta, ...variants } = stories[key];

      if (meta.title.toLowerCase() === storyId) {
        Object.keys(variants).forEach((variantName) => {
          if (variantName.toLowerCase() === variantId) {
            activeStory = {
              args: variants[variantName].args,
              component: meta.component,
            };
          }
        });
      }
    });

    return activeStory;
  }
};
