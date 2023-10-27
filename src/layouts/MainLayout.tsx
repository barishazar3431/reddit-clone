import React from 'react';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="pt-12">{children}</div>
    </>
  );
}
