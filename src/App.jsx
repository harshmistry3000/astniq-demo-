import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { OurServices } from './components/OurServices'
import { ConsultingServices } from './components/ConsultingServices'
import { Technologies } from './components/Technologies'
import { HowWeWork } from './components/HowWeWork'
import { ChooseFuture } from './components/ChooseFuture'
import { Footer } from './components/Footer'
import { GlobeStats } from './components/GlobeStats'
import { MarqueeTicker } from './components/MarqueeTicker'
import { Graph3D } from './components/Graph3D'
import { AIPage } from './pages/AIPage'
import { ServicePage } from './pages/ServicePage'
import { TechnologiesPage } from './pages/TechnologiesPage'
import { FloatingCubes } from './components/FloatingCubes'
import './App.css'

function HomePage() {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Services />
      <OurServices />
      <GlobeStats />
      <ConsultingServices />
      <FloatingCubes />
      <Technologies />
      <Graph3D />
      <HowWeWork />
      <ChooseFuture />
      <Footer />
    </div>
  )
}

function AIPageWrapper() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <AIPage />
      <Footer />
    </div>
  )
}

function ServicePageWrapper() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <ServicePage />
      <Footer />
    </div>
  )
}

function TechnologiesPageWrapper() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-20">
      <Navbar />
      <TechnologiesPage />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai" element={<AIPageWrapper />} />
        <Route path="/services" element={<ServicePageWrapper />} />
        <Route path="/technologies" element={<TechnologiesPageWrapper />} />
      </Routes>
    </Router>
  )
}

export default App
