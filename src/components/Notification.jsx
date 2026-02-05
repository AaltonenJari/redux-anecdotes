import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  useEffect(() => {
    dispatch(setNotification('This is a notification message'))

    const timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [dispatch])

  if (!notification) {
    return null
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
