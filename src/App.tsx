import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Skills } from './components/Skills'

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-white/20">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Education />
      <Skills />
    </main>
  )
}

export default App
