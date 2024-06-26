"use client";
import store from '@/Redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const NextProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default NextProvider
