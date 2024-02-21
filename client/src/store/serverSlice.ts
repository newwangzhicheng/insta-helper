import {createSlice} from "@reduxjs/toolkit";

const serverSlice = createSlice({
  name: 'server',
  initialState: 'localhost:3000',
  reducers: {
    update: (state, action) => {
      return action.payload
    }
  }
})

export const {update} = serverSlice.actions
export default serverSlice.reducer