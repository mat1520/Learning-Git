import { useState, useEffect, useCallback } from 'react'
import { GitRepository, CommandHistory } from '@/types'

const STORAGE_KEYS = {
  REPO: 'git-terminal-repo',
  HISTORY: 'git-terminal-history',
  ACHIEVEMENTS: 'git-achievements'
} as const

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.warn(`Error loading ${key} from localStorage:`, error)
    }
  }, [key])

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error)
    }
  }, [key, storedValue])

  return [storedValue, setValue] as const
}

export function useGitTerminal() {
  const [repository, setRepository] = useLocalStorage<GitRepository>(STORAGE_KEYS.REPO, {
    files: [],
    currentBranch: 'main',
    branches: ['main'],
    commits: [],
    isInitialized: false,
    userConfig: {}
  })

  const [commandHistory, setCommandHistory] = useLocalStorage<CommandHistory[]>(STORAGE_KEYS.HISTORY, [])

  const clearHistory = useCallback(() => {
    setCommandHistory([])
  }, [setCommandHistory])

  const resetRepository = useCallback(() => {
    setRepository({
      files: [],
      currentBranch: 'main',
      branches: ['main'],
      commits: [],
      isInitialized: false,
      userConfig: {}
    })
    setCommandHistory([])
  }, [setRepository, setCommandHistory])

  return {
    repository,
    setRepository,
    commandHistory,
    setCommandHistory,
    clearHistory,
    resetRepository
  }
}

export { STORAGE_KEYS }
