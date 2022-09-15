import type { AppProps } from 'next/app';
import Global from '../components/Global/Global'
import '../public/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global />
    <Component {...pageProps} />
  </>
)

export default MyApp
