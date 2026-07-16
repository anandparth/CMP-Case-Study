import { MotionConfig } from 'framer-motion'
import SketchDefs from './components/SketchDefs'
import MetaBar from './components/MetaBar'
import Hero from './components/Hero'
import DashboardShowcase from './components/DashboardShowcase'
import Context from './components/Context'
import ProblemGrid from './components/ProblemGrid'
import ResearchLog from './components/ResearchLog'
import DesignDecisions from './components/DesignDecisions'
import Outcomes from './components/Outcomes'
import FinalDesigns from './components/FinalDesigns'
import Reflection from './components/Reflection'
import Footer from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* no bg here: body paints the dotted paper, and an opaque fill would hide it */}
      <div className="min-h-screen">
        <SketchDefs />
        <MetaBar />
        <Hero />
        <DashboardShowcase />
        <Context />
        <ProblemGrid />
        <ResearchLog />
        <DesignDecisions />
        <Outcomes />
        <FinalDesigns />
        <Reflection />
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
