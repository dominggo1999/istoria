import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationWrapper } from './Navigation.style';
import 'twin.macro';
import useFrameUrl from './hooks/useFrameUrl';

const ViewSingle = () => {
  const frameUrl = useFrameUrl();
  if (`${window.location.href}sandbox/` === frameUrl) return null;

  return (
    <div tw="mb-2">
      <a
        rel="noreferrer noopener"
        target="_blank"
        href={frameUrl}
      >
        View Single
      </a>
    </div>
  );
};

const NavItem = ({ list, storyId }) => {
  return (
    <ul>
      {
        list?.length > 0 && list.map((variant) => {
          return (
            <li key={variant.variantId}>
              <Link
                to={`/?storyId=${storyId}&variantId=${variant.variantId}`}
              >
                {variant.name}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

const Navigation = ({ list }) => {
  return (
    <NavigationWrapper>
      <ViewSingle />
      {list?.length > 0 && list.map((i) => {
        return (
          <div
            key={i.storyId}
            tw="mb-3"
          >
            <span tw="text-lg font-bold">{i.name}</span>
            <NavItem
              storyId={i.storyId}
              list={i.variants}
            />
          </div>
        );
      })}
    </NavigationWrapper>
  );
};

export default Navigation;
