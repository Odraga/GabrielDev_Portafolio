import About from "../../components/LandingPage/About";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/LandingPage/Header";
import Projects from "../../components/LandingPage/Projects";

const LandingPage = () => {
  return (
    <>
      <div className="container-md container-lg mt-0 mb-0">
        <Header />
        <Projects />
        <About />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
