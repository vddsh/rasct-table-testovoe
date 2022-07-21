import {configureStore} from '@reduxjs/toolkit';
import studentsApi from './Students/students.api';
import {StudentReducer} from './Students/students.slice';

const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
    studentData: StudentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentsApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export default store;