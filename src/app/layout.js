import "./globals.css";
import "./colors.css";
import Head from "./components/HeadComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
