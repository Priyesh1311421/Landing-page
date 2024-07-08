import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import StickyBackgroundSection from './components/Sticky'
import { Feedback } from './components/Feedback'
import { Note } from './components/Note'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <StickyBackgroundSection/>
    <Feedback/>
    <Note/>
    </>
  )
}

export default App
