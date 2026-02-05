import { createSlice } from "@reduxjs/toolkit"

const initialMessage = "Initial notification"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialMessage,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return null
    }   
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer