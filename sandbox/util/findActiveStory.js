export const findActiveStory = (stories, storyId, variantId) => {
  let activeStory;

  if (storyId && variantId) {
    Object.keys(stories).forEach((key) => {
      const { meta, ...variants } = stories[key];

      if (!meta) {
        console.warn('There is no meta in ', key);
        return;
      }

      if (meta.title.toLowerCase() === storyId) {
        Object.keys(variants).forEach((variantName) => {
          if (variantName.toLowerCase() === variantId) {
            activeStory = {
              args: variants[variantName]?.args || {},
              component: variants[variantName],
            };
          }
        });
      }
    });

    return activeStory;
  }
};
