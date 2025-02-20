import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const useGameStore = create(
  combine(
    {
      history: [Array(9).fill(null)], // Initial board state
      currentMove: 0, // Keeps track of which move the player is on
    },
    (set) => ({
      setHistory: (nextHistory) => {
        set((state) => ({
          history:
            typeof nextHistory === 'function'
              ? nextHistory(state.history)
              : nextHistory,
        }))
      },
      setCurrentMove: (nextCurrentMove) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === 'function'
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
        }))
      },
    }),
  ),
)

export default useGameStore
