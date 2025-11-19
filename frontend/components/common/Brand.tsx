'use client'
import React from 'react';
import { APP_NAME } from '../../constants/content';

const Brand = () => {
  // document.cookie="isLoggedIn=true;"

  return (
  <h2 className="font-bold text-xl md:text-3xl tracking-wide text-blue-700" style={{ fontFamily: "var(--font-inter)" }}>
    {APP_NAME}
  </h2>
);
}

export default Brand;
