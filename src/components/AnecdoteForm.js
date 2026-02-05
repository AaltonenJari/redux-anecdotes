import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer' 
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = '' 
    dispatch(createNewAnecdote(content))
    dispatch(setNotification('Saved successfully', 5))
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