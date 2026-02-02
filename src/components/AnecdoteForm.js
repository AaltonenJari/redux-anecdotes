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
      <div>
        <input name="content" />
      </div>
      <div>
        <button type="submit">create</button>
      </div>
    </form>
  )
}

export default AnecdoteForm