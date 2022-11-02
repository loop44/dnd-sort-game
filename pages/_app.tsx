import type { AppProps } from 'next/app';

import { css, Global } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
  }
  html,
  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    height: 100%;
    overflow: hidden;
  }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <Component {...pageProps} />;
  </>
);

export default App;
