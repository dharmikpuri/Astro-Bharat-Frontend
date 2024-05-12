import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseURL = "https://astro-bharat-backend-dharmik.onrender.com"

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
                body: JSON.stringify(obj)
            })
        }),
        updateAstologer: builder.mutation({
            query: (Data) => ({
                url: `/api/astrologers/${Data._id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data)
            })
        })
    })
})

export const { useGetAllastrologersQuery, useRegisterAstrologerMutation, useUpdateAstologerMutation } = astrologerApi