import { MotionConfig } from 'framer-motion'
import MetaBar from './components/MetaBar'
import Hero from './components/Hero'
import Context from './components/Context'
import ProblemGrid from './components/ProblemGrid'
import ResearchLog from './components/ResearchLog'
import DesignDecisions from './components/DesignDecisions'
import Outcomes from './components/Outcomes'
import Reflection from './components/Reflection'
import Footer from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper">
        <MetaBar />
        <Hero />
        <Context />
        <ProblemGrid />
        <ResearchLog />
        <DesignDecisions />
        <Outcomes />
        <Reflection />
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
