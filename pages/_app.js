import '../styles/globals.css'

import Head from 'next/head';

// Import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>AutoTest</title>
        <meta name="description" content="AutoTest ist eine Plattform, welche dir die Macht gibt, personalisierte Tests zu erstellen." />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App;
