import "../styles/globals.css";
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps } : any) {
  return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;