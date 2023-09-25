"use client"
import React, { useState } from 'react'
import { AlertContext } from '@/lib/contexts'

export default function AlertContextProvider({ children }) {
    const [showAlert, setShowAlert] = useState(false)
    const [alertStatus, setAlertStatus] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    return (
        <AlertContext.Provider value={{
            showAlert,
            setShowAlert,
            alertMessage,
            setAlertMessage,
            alertStatus,
            setAlertStatus
        }}>
            {children}
        </AlertContext.Provider>
    )
}
