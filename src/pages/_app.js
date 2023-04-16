import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/page.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <section className='max-w-[1600px] no-scrollbar overflow-clip scroll-smooth  mx-auto min-h-screen'>
        <Component {...pageProps} />
      </section>
    </ChakraProvider>
  );
}

export default MyApp;
