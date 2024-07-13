import { extendTheme } from '@chakra-ui/react';

export const darkTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: '#18181a', // Warna latar belakang gelap
          color: 'white', // Warna teks terang
        },
      },
    },
    components: {
      Tabs: {
        baseStyle: {
          tab: {
            color: 'gray.500', 
            _selected: {
              color: 'white', 
              bg: 'gray.700', 
            },
            flexGrow: 1, 
        },
          tablist: {
            borderBottom: '1px solid',
            borderColor: 'gray.600',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            margin: 'auto',
            flexWrap: 'nowrap', 
          },
          tabpanel: {
            bg: 'gray.800', 
          },
          tabindicator: {
            bg: 'blue.500', 
          },
        },
      },
    },
  });
