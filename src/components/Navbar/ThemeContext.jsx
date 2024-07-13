import { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        brand: {
          900: '#1a365d',
          800: '#153e75',
          700: '#141414',
        },
        ...(mode === 'dark'
          ? {
              background: {
                default: '#1a202c',
              },
              text: {
                primary: '#e2e8f0',
                secondary: '#cbd5e0',
              },
            }
          : {}),
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext };
