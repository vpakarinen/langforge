import { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="container flex-grow mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
