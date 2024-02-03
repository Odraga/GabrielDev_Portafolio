import About from "../../components/LandingPage/About";
import Header from "../../components/LandingPage/Header";
import Projects from "../../components/LandingPage/Projects";
import PreLoader from "../../components/common/PreLoader";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Projects />
      <About />
    </>
  );
};

export default LandingPage;
