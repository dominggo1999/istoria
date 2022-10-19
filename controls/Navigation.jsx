import React from 'react';
import { IoMdOpen } from 'react-icons/io';
import { Link, useSearchParams } from 'react-router-dom';
import { NavigationWrapper } from './Navigation.style';
import 'twin.macro';
import useFrameUrl from './hooks/useFrameUrl';
import { messageSandbox } from './util/messageSandBox';

const ViewSingle = () => {
  const frameUrl = useFrameUrl();
  if (`${window.location.href}sandbox/` === frameUrl) return null;

  return (
    <div tw="mb-2 px-4">
      <a
        tw="font-medium w-full inline-flex items-center"
        rel="noreferrer noopener"
        target="_blank"
        href={frameUrl}
      >
        View Single
        <IoMdOpen tw="text-lg ml-2" />
      </a>
    </div>
  );
};

const NavItem = ({
  list, activeStory, activeVariant, storyId,
}) => {
  return (
    <ul>
      {
        list?.length > 0 && list.map((variant) => {
          const isActive = variant.variantId === activeVariant && storyId === activeStory;

          return (
            <li
              className={isActive ? 'active' : null}
              key={variant.variantId}
            >
              <Link
                className="storylink"
                onClick={() => messageSandbox({ storyId, variantId: variant.variantId })}
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
  const [searchParams] = useSearchParams();
  const activeStory = searchParams.get('storyId');
  const activeVariant = searchParams.get('variantId');

  return (
    <NavigationWrapper>
      <ViewSingle />
      {list?.length > 0 && list.map((i) => {
        return (
          <div
            key={i.storyId}
            tw="mb-3"
          >
            <span
              className="storyname"
              tw="text-lg font-bold"
            >{i.name}
            </span>
            <NavItem
              activeVariant={activeVariant}
              activeStory={activeStory}
              isStoryActive={i.storyId === activeStory}
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
