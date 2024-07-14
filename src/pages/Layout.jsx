import { Outlet } from 'react-router-dom';
import SimpleSidebar from '../components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '../components/Navbar/ThemeContext';
import RightFeature from '../components/RightContent/RightFeatureLayout';

const Layout = () => {
  return (
    <ChakraProvider>
      <div style={{ display: 'grid', gridTemplateColumns: '20% 55% 25%', width: '100%',height:'100%' }}>
        {/* Sidebar */}
        <div style={{ width: '20%' }}>
          <SimpleSidebar />
        </div>
        
        {/* Main Content */}
        <div id='content' style={{ height: '100%', borderRight: '2px solid white', display: 'flex' }}>
          <Outlet />
        </div>
        
        {/* Right Feature */}
        <div style={{ height: '100%', width:'' }}>
          <ThemeProvider>
            <RightFeature />
          </ThemeProvider>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Layout;
