import { AboutMe } from './components/aboutme/abotume'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience'
import { Formation } from './components/formation/formation'
import { Header } from './components/header'
import { Projects } from './components/projects/Projects'

function App() {

  return (
      <div className='flex flex-col h-full w-full 
      flex items-center'>
        <Header/>
        <AboutMe/>
        <Projects />
        <Formation/>
        <Contact/>
        <Experience/>
      </div>
  )
}

export default App
