import {createSelector, createSlice} from '@reduxjs/toolkit'
import {useSelector} from "react-redux";

export const sessionSlice = createSlice({
  name: 'session',
  initialState: '',
  reducers: {
    update: (state, action) => {
      return action.payload
    }
  }
})

const selectLoggedIn = createSelector(
  (state) => state.session,
  (session) => {
    return session && session.length > 0
  }
)

export const { update } = sessionSlice.actions
export default sessionSlice.reducer
