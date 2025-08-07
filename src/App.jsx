import Navbar from './components/Navbar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Logos from './components/Logos'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutMe />
      <Logos />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
