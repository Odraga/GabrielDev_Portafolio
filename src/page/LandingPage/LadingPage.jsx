import About from "../../components/LandingPage/About";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/LandingPage/Header";
import Projects from "../../components/LandingPage/Projects";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="container-md container-lg mt-0 mb-0">
        <Projects />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default LandingPage;
