import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech } from './components'
function App() {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0 px-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
