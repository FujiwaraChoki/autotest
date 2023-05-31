import '../styles/globals.css'

// Import components
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer className="footer">
    </>
  )
}
