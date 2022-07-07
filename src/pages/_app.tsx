import "../styles/globals.css";
import Layout from '../components/layout/layout'

function SafeHydrate( children ) {
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
