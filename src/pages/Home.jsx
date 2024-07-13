import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import NavigationContent from '../components/Navbar/NavigationContent';

// Chakra UI theme
const colors = {
  brand: {
    900: '#161616',
    800: '#1f2022',
    700: '#1a1c1d',
  },
};
const chakraTheme = extendTheme({ colors });

function Home() {
  return (
    <div className='flex' style={{ width: '100%', height : '100%', backgroundColor: '#1E1C1C', display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <ChakraProvider theme={chakraTheme}>
          <NavigationContent />
        </ChakraProvider>
      </div>
      {/* <div style={{ width: '30%', display: 'flex', height : "100%", flexDirection: 'column' }}>
        <ThemeProvider>
          <RightFeature />
        </ThemeProvider>
      </div> */}
    </div>
  );
}

export default Home;
