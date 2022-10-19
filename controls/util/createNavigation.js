export const createNavigation = (stories) => {
  const collect = [];

  Object.keys(stories).forEach((key) => {
    const navigationItem = {
      storyId: '',
      variants: [],
    };
    const { meta, ...rest } = stories[key];
    if (!meta) {
      return;
    }

    navigationItem.storyId = meta.title.toLowerCase();
    navigationItem.name = meta.title;

    Object.keys(rest).forEach((componentName) => {
      navigationItem.variants.push({
        variantId: componentName.toLowerCase(),
        name: componentName,
      });
    });

    collect.push(navigationItem);
  });

  return collect;
};
