import PropTypes from 'prop-types'
import Square from './Square'
import calculateWinner from '../utils/calculateWinner'

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares)
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`

  function handleClick(i) {
    if (squares[i] || winner) return
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    onPlay(nextSquares)
  }

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>{status}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: '150px',
          border: '1px solid #999',
        }}
      >
        {squares.map((_, i) => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  )
}

// ✅ Add PropTypes for validation
Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired, // xIsNext should be a boolean
  squares: PropTypes.arrayOf(PropTypes.string).isRequired, // squares should be an array of strings
  onPlay: PropTypes.func.isRequired, // onPlay should be a function
}

export default Board
