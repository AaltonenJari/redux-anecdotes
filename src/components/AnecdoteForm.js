import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { appendAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async(event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = '' 
    dispatch(appendAnecdote(content))
    dispatch(setNotification(`new anecdote '${content}'`, 5))
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