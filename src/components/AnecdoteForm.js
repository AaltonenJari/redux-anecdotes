import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer' 
import { setNotification } from '../reducers/notificationReducer'
import anecdoteservice from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async(event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = '' 
    const newAnecdote = await anecdoteservice.createNew(content)
    dispatch(createNewAnecdote(newAnecdote))
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