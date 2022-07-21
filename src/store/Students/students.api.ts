import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IStudent, ServerResponse} from '../../models/models';


const studentsAPI = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-task-j.herokuapp.com'
  }),
  endpoints: build =>({
    getAllStudents: build.query<ServerResponse<IStudent>,any>({
      query: (params) => ({
        url: '/data',
        params,
      })
    })
  })
})

export const {useGetAllStudentsQuery} = studentsAPI

export default studentsAPI