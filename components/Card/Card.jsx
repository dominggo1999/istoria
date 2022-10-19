import React from 'react';
import 'twin.macro';

const Card = ({ title, description }) => {
  return (
    <a
      href="#"
      tw="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 tw="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p tw="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </a>
  );
};

export default Card;
