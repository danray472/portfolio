import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App md:mr-[10%] md:ml-[10%]">
   <Navbar />
   <About/>
   <Skills />
   <Projects />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
