import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/variables';
import { GlobalStyle } from 'theme/globalStyles';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
