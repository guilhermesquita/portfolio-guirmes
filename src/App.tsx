// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
import { AboutMe } from './components/aboutme/abotume'
import { Experience } from './components/experience/Experience'
import { Projects } from './components/projects/Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col h-screen w-screen 
      flex items-center'>
        <Projects />
        <AboutMe/>
        <Experience/>
      </div>
  )
}

export default App
