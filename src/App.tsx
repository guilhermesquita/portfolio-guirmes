// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
import { AboutMe } from './components/aboutme/abotume'
import { Formation } from './components/formation/formation'
// import { Experience } from './components/experience/Experience'
import { Header } from './components/header'
import { Projects } from './components/projects/Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col h-full w-full 
      flex items-center'>
        <Header/>
        <AboutMe/>
        <Projects />
        <Formation/>
        {/* <Experience/> */}
      </div>
  )
}

export default App
