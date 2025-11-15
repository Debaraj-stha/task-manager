import React from 'react';
import { APP_NAME } from '../../constants/content';

const Brand = () => (
  <h2 className="font-extrabold text-2xl md:text-3xl text-white hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap cursor-pointer">
    {APP_NAME}
  </h2>
);

export default Brand;
