"use client"
import React, { useState } from 'react'

import { LoadingContext } from '@/lib/contexts'

export default function LoadingContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{
      isLoading,
      setIsLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}
