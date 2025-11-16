'use client'
import React from 'react';
import { APP_NAME } from '../../constants/content';

const Brand = () => {
  const today=new Date()
  document.cookie=`isLoggedIn=true;expires=${today.setMonth(today.getMonth()+3)};path=/`
  return (
  <h2 className="font-bold text-3xl tracking-wide">
    {APP_NAME}
  </h2>
);
}

export default Brand;
