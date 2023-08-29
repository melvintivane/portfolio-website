import Header from '../src/components/header/Header.jsx';
import Navbar from '../src/components/navbar/Navbar.jsx';
import About from '../src/components/about/About.jsx';
import Experience from '../src/components/experience/Experience.jsx';
import Services from '../src/components/services/Services.jsx';
import Contact from '../src/components/contact/Contact.jsx';
import Footer from '../src/components/footer/Footer.jsx';
import Portfolio from '../src/components/portfolio/Portfolio.jsx';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
