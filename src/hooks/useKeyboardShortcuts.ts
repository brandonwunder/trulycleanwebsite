'use client'

import { useEffect } from 'react'

interface Shortcut {
  key: string
  ctrlOrCmd?: boolean
  shift?: boolean
  alt?: boolean
  callback: () => void
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const ctrlOrCmdPressed = event.ctrlKey || event.metaKey
        const shiftPressed = event.shiftKey
        const altPressed = event.altKey

        const isCtrlOrCmdMatch = shortcut.ctrlOrCmd ? ctrlOrCmdPressed : !ctrlOrCmdPressed
        const isShiftMatch = shortcut.shift ? shiftPressed : !shortcut.shift
        const isAltMatch = shortcut.alt ? altPressed : !shortcut.alt
        const isKeyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase()

        if (isCtrlOrCmdMatch && isShiftMatch && isAltMatch && isKeyMatch) {
          event.preventDefault()
          shortcut.callback()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [shortcuts])
}

// Common shortcuts
export const SHORTCUTS = {
  openQuoteForm: { key: 'k', ctrlOrCmd: true },
  closeModal: { key: 'Escape' },
  submitForm: { key: 'Enter', ctrlOrCmd: true },
}
