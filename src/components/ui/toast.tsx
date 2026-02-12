'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { CheckCircle, AlertTriangle, Info, X } from 'lucide-react'

export type ToastVariant = 'success' | 'error' | 'info' | 'warning'

interface ToastProps {
  id: string
  title: string
  message?: string
  variant?: ToastVariant
  onClose: () => void
  autoClose?: boolean
  duration?: number
}

export function Toast({
  id,
  title,
  message,
  variant = 'info',
  onClose,
  autoClose = true,
  duration = 4000,
}: ToastProps) {
  const variants = {
    success: { icon: CheckCircle, bgColor: 'bg-green-50', borderColor: 'border-green-200', iconColor: 'text-green-600' },
    error: { icon: AlertTriangle, bgColor: 'bg-red-50', borderColor: 'border-red-200', iconColor: 'text-red-600' },
    warning: { icon: AlertTriangle, bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', iconColor: 'text-yellow-600' },
    info: { icon: Info, bgColor: 'bg-blue-50', borderColor: 'border-blue-200', iconColor: 'text-blue-600' },
  }

  const { icon: Icon, bgColor, borderColor, iconColor } = variants[variant]

  // Auto close effect
  if (autoClose) {
    setTimeout(onClose, duration)
  }

  return (
    <motion.div
      key={id}
      layout
      initial={{ opacity: 0, x: 100, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`${bgColor} border ${borderColor} rounded-lg p-4 shadow-lg flex items-start gap-4`}
    >
      <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        {message && <p className="text-xs text-gray-600 mt-1">{message}</p>}
      </div>

      <button
        onClick={onClose}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

interface ToastContainerProps {
  toasts: ToastProps[]
  onClose: (id: string) => void
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 max-w-md">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => onClose(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
