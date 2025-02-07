import PropTypes from 'prop-types'

function Square({ value, onSquareClick }) {
  return (
    <button
      style={{
        width: '50px',
        height: '50px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        border: '1px solid #999',
        backgroundColor: '#fff',
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

// ✅ Add PropTypes for validation
Square.propTypes = {
  value: PropTypes.string, // Can be 'X', 'O', or null
  onSquareClick: PropTypes.func.isRequired, // Function to handle click
}

export default Square
