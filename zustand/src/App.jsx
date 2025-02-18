import useGameStore from './zustand/gameStore'
import Board from './coomponents/Board'

function App() {
  const history = useGameStore((state) => state.history)
  const setHistory = useGameStore((state) => state.setHistory)
  const currentMove = useGameStore((state) => state.currentMove)
  const setCurrentMove = useGameStore((state) => state.setCurrentMove)

  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Zustand Implimentation</h1>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div style={{ marginTop: '10px' }}>
        <ol>
          {history.map((_, index) => (
            <li key={index}>
              <button onClick={() => jumpTo(index)}>
                {index ? `Go to move #${index}` : 'Go to game start'}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default App
