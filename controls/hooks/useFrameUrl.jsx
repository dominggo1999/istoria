import React from 'react';
import { useLocation } from 'react-router-dom';

const useFrameUrl = () => {
  const frameUrl = `${window.location.origin}/istoria/sandbox/`;
  const { search } = useLocation();

  return frameUrl + search;
};

export default useFrameUrl;
