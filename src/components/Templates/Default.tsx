import * as React from 'react';
import { ReactNode } from 'react';
import Header from '@/layouts/Header/Header';

interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <footer>FOOTER</footer>
    </>
  );
};

export default Default;
