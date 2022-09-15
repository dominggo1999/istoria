import React from 'react';
import { AvatarWrapper } from './Avatar.style';

const Avatar = ({ src, variant = 'Basic' }) => {
  return (
    <>
      <AvatarWrapper variant={variant}>
        <img
          src={src}
          alt="Avatar"
        />
      </AvatarWrapper>
      <span>Variant : {variant}</span>
    </>
  );
};

export default Avatar;
