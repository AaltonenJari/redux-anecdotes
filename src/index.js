import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

