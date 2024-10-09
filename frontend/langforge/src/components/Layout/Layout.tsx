import { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto p-4 pb-24">{children}</main>
      <footer className="fixed bottom-0 left-0 w-full p-3 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
