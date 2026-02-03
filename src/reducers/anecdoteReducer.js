import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'But it works in my machine...',
  'If it hurts, do it more often',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Adding manpower to a late software project makes it later!'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
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
    }
  }
})

export const { voteAnecdote, createNewAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer