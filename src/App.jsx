import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { OurServices } from './components/OurServices'
import { ConsultingServices } from './components/ConsultingServices'
import { Technologies } from './components/Technologies'
import { HowWeWork } from './components/HowWeWork'
import { ChooseFuture } from './components/ChooseFuture'
import './App.css'

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <OurServices />
        <ConsultingServices />
        <Technologies />
        <HowWeWork />
        <ChooseFuture />
      </div>
    </Router>
  )
}

export default App
