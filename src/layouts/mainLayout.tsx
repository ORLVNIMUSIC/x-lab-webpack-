import React, { ReactNode } from 'react';
import Header from '../components/header';
import Menu from '../components/menu';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="content">
        <Menu />
        {children}
      </div>
    </>
  );
}
