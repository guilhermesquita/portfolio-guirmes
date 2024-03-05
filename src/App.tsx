// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
import { AboutMe } from './components/aboutme/abotume'
// import { Experience } from './components/experience/Experience'
import { Header } from './components/header'
import { Projects } from './components/projects/Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col h-screen w-full 
      flex items-center'>
        <Header/>
        <AboutMe/>
        <Projects />
        {/* <Experience/> */}
      </div>
  )
}

export default App
