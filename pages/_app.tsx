import type { AppProps } from 'next/app';
import GlobalStyles from './styled/GlobalStyles'
import '../public/styles/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default MyApp
