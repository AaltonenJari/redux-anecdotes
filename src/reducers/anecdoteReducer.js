import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    },
    createNewAnecdote(state, action) {
      const content = action.payload
      const newAnecdote = {
        content: content,
        id: getId(),
        votes: 0
      }
      state.push(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload 
    }
  }
})

export const { voteAnecdote, createNewAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer