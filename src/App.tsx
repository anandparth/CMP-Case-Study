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
    <div className="min-h-screen bg-ink">
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
  )
}

export default App
