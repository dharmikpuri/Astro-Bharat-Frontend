import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseURL = "http://localhost:8080"

export const astrologerApi = createApi({
    reducerPath: "astrologerApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getAllastrologers: builder.query({
            query: () => "/api/astrologers"
        }),
        registerAstrologer: builder.mutation({
            query: (obj) => ({
                url: "/api/astrologers/register",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: obj
            })
        }),
        updateAstologer: builder.mutation({
            query: ({ id, obj }) => ({
                url: `/api/astrologers/${id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: obj
            })
        })
    })
})

export const { useGetAllastrologersQuery, useRegisterAstrologerMutation, useUpdateAstologerMutation } = astrologerApi