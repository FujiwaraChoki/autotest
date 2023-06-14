import '../styles/globals.css'

import Head from 'next/head';

import { UserProvider } from '../contexts/UserContext';
import { useState } from 'react';

// Import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserProvider value={{ user, setUser }}>
        <Head>
          <title>AutoTest</title>
          <link rel="icon" href="/logo.png" />
          <meta name="description" content="AutoTest ist eine Plattform, welche dir die Macht gibt, personalisierte Tests zu erstellen." />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  )
}

export default App;
