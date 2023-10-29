import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function MainPageLayout() {
  return (
    <>
      <Header />
      <div className="pt-12">
        <Outlet />
      </div>
    </>
  );
}
