import '../styles/globals.css'

import Head from 'next/head';
import Wave from 'react-wavify'

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
          <meta name="description" content="AutoTest ist eine Plattform, welche dir die Macht gibt, personalisierte Tests zu erstellen." />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
      <Wave fill='#4F46E5'
        paused={false}
        options={{
          height: 5,
          amplitude: 10,
          speed: 0.45,
          points: 5
        }}
        style={{
          bottom: 0,
          position: 'sticky',
          marginBottom: -10
        }}
      />
    </>
  )
}

export default App;
