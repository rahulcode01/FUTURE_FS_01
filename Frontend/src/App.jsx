
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <div className="min-safe-width">
        <Navbar />
        <div className='pt-16' >
          <Hero />
        </div>
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
