import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { astrologerApi } from "./service/api";

export const store = configureStore({
    reducer: {
        [astrologerApi.reducerPath]: astrologerApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(astrologerApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)