import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import About from "../../components/about/About.jsx";
import Experience from "../../components/experience/Experience.jsx";
import Services from "../../components/services/Services.jsx";
import Contact from "../../components/contact/Contact.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Portfolio from "../../components/portfolio/Portfolio.jsx";

function Home() {
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
  );
}

export default Home;
