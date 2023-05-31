import '../styles/globals.css'

// Import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
