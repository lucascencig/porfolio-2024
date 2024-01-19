import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Certific from './components/Certific'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Skills />
      <Certific />
      <Contact />
    </div>
  )
}

export default App
