import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IStudent} from '../../models/models';



const initialState: any[] = []

export const studentSlice = createSlice({
  name: 'scvCount',
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<IStudent>) => {
      state.push(action.payload)
    },
    removeStudent: (state, action: PayloadAction<number>) => {
     return state.filter(el => el.id !== action.payload)
    }
  }
})

export const StudentReducer = studentSlice.reducer
export const StudentAction = studentSlice.actions