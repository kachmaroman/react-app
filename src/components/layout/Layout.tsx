import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-auto h-screen'>
      <Sidebar />
      {/* <div className='grow'>
        <Navbar />
        <div className='m-5'>{children}</div>
      </div> */}
    </div>
  );
};

export default Layout;
