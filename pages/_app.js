// pages/_app.js (or _app.jsx)
import '../styles/globals.css'; // Adjust path as per your project structure

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
