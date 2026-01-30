import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer' 

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = '' 
    dispatch(createNewAnecdote(content))
  }

  return (
    <form onSubmit={addAnecdote}>
        <input name="content" />
        <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm