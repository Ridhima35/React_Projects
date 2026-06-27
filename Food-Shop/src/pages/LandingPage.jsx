import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Features from '../components/Features';
import Trending from '../components/Trending';
import OrganicSociety from '../components/OrganicSociety';
import Store from '../components/Store';
import PromoBanner from '../components/PromoBanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Trending />
      <OrganicSociety />
      <Store />
      <PromoBanner />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
