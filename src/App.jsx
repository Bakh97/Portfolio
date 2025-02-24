import About from './components/about/about.jsx'
import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    </div>
  )
}

export default App
