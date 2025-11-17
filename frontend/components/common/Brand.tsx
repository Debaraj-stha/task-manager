'use client'
import React from 'react';
import { APP_NAME } from '../../constants/content';

const Brand = () => {

  return (
  <h2 className="font-bold text-3xl tracking-wide text-blue-700" style={{ fontFamily: "var(--font-inter)" }}>
    {APP_NAME}
  </h2>
);
}

export default Brand;
