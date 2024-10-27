import './App.css'
import { About } from './components/About/About'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'

function App() {
  return (
    <main>
      <Header />
      
      <Presentation />
      <About />
    </main>
  )
}

export default App
