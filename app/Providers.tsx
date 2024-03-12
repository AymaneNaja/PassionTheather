'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import TmdbApi from '@/api/TmdbApi'


function Providers({ children }: { children: React.ReactNode }) {
    const store = configureStore({
        reducer: {
            [TmdbApi.reducerPath]: TmdbApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TmdbApi.middleware),
    })
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers