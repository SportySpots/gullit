import colors from './colors';

// See https://rebassjs.org/theming
const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 18, 20, 28, 32, 40,
  ],
  colors,
  space: [
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  fonts: {
    raj: "'Rajdhani', sans-serif",
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
};

export default theme;
