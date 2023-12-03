import './App.css'
import Board from './Components/Board'
import { WordleContextProvider } from './Context/WordleContext'

function App() {
  
  return (
    <WordleContextProvider>
          <Board />
    </WordleContextProvider>
  )
}

export default App
