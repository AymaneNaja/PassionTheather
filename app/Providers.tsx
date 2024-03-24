'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import TmdbApi from '@/api/redux/TmdbApi'
import { SessionProvider } from 'next-auth/react'


function Providers({ children }: { children: React.ReactNode }) {
    const store = configureStore({
        reducer: {
            [TmdbApi.reducerPath]: TmdbApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TmdbApi.middleware),
    })
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    )
}

export default Providers