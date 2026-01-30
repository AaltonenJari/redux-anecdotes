import { useDispatch, useSelector } from 'react-redux'

function App() {
  const value = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => dispatch({ type: 'INC' })}>
        +
      </button>
    </div>
  )
}

export default App
