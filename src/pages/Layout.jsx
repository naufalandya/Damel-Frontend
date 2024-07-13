import { Outlet } from 'react-router-dom';
import SimpleSidebar from '../components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '../components/Navbar/ThemeContext';
import RightFeature from '../components/RightContent/RightFeatureLayout';

const Layout = () => {
  return (
    <ChakraProvider>
      <div className='flex' style={{ height: '100%', width: '100%' }}>
        {/* Sidebar */}
        <div style={{ width: '20%', position: 'fixed', height: '100%' }}>
          <SimpleSidebar />
        </div>
        {/* Main Content */}
        <div id='content' className='flex' style={{ marginLeft: '20%', width: '55%', height: '100%', display: 'flex',  borderRight: '2px solid white' }}>
          <Outlet />
        </div>
        {/* Right Feature */}
        <div className='h-full' style={{ width: '25%', height: '100%' }}>
          <ThemeProvider>
            <RightFeature />
          </ThemeProvider>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Layout;
