
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const UserApi = createApi({
    reducerPath: 'UserApi',
    tagTypes: ['user'],
    baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
    endpoints: (builder) => ({
        getUserFavs: builder.query({
            query: ({ id }) => `/${id}/favorites`,
            providesTags: ['user']
        }),
        postUserFavs: builder.mutation({
            query: ({ user_id, id, type }) => ({
                url: `/${user_id}/favorites`,
                method: 'POST',
                body: JSON.stringify({ id, type })
            })
            , invalidatesTags: ['user']
        }),
        deleteUserFavs: builder.mutation({
            query: ({ user_id, id }) => ({
                url: `/${user_id}/favorites`,
                method: 'delete',
                body: JSON.stringify({ id: id })
            })
            , invalidatesTags: ['user']
        }),

    })
})


export const { useDeleteUserFavsMutation, useGetUserFavsQuery, usePostUserFavsMutation } = UserApi

export default UserApi