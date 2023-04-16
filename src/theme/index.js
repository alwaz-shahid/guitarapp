import { extendTheme } from '@chakra-ui/react';
let theme;
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#2B2D42',
    800: '#8D99AE',
    700: '#EDF2F4',
  },
};

export default theme = extendTheme({ colors });
