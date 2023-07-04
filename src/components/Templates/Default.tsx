import * as React from 'react';
import { ReactNode } from 'react';
import Header from '@/layouts/Header/Header';
import Footer from '@/layouts/Footer/Footer';


interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <>
       <Header/>
        {children}
       <Footer/>
    </>
  );
};

export default Default;
