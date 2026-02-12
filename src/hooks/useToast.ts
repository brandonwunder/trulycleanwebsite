'use client'

import { useState, useCallback } from 'react'

export interface Toast {
  id: string
  title: string
  message?: string
  variant?: 'success' | 'error' | 'info' | 'warning'
  autoClose?: boolean
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback(
    (
      title: string,
      options?: {
        message?: string
        variant?: 'success' | 'error' | 'info' | 'warning'
        autoClose?: boolean
        duration?: number
      }
    ) => {
      const id = Math.random().toString(36).substr(2, 9)
      const toast: Toast = {
        id,
        title,
        ...options,
      }
      setToasts((prev) => [...prev, toast])
      return id
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const success = useCallback(
    (title: string, message?: string) => {
      addToast(title, { message, variant: 'success' })
    },
    [addToast]
  )

  const error = useCallback(
    (title: string, message?: string) => {
      addToast(title, { message, variant: 'error', duration: 6000 })
    },
    [addToast]
  )

  const info = useCallback(
    (title: string, message?: string) => {
      addToast(title, { message, variant: 'info' })
    },
    [addToast]
  )

  const warning = useCallback(
    (title: string, message?: string) => {
      addToast(title, { message, variant: 'warning', duration: 5000 })
    },
    [addToast]
  )

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info,
    warning,
  }
}
