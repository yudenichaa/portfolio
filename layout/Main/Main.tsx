import Intro from '../../components/Intro';
// import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Certificates from '../../components/Certificates';
import Portfolio from '../../components/Portfolio';

const Main: React.FC = () => {
  return (
    <main>
      <Intro />
      {/* <AboutMe /> */}
      <Experience />
      <Portfolio />
      <Skills />
      <Certificates />
    </main>
  );
};

export default Main;
