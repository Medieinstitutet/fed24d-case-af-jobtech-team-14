import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { RecentSearchesContext } from './recentSearchesContext'

const STORAGE_KEY = 'recentSearches'
const MAX = 5

export const RecentSearchesProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [searches, setSearches] = useState<string[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(searches))
  }, [searches])

  const addSearch = (q: string) => {
    const s = q.trim()
    if (!s) return
    setSearches(prev => [s, ...prev.filter(x => x !== s)].slice(0, MAX))
  }

  const clearSearches = () => {
    setSearches([])
    localStorage.removeItem(STORAGE_KEY)
  }

  const value = useMemo(
    () => ({ searches, addSearch, clearSearches }),
    [searches],
  )

  return (
    <RecentSearchesContext.Provider value={value}>
      {children}
    </RecentSearchesContext.Provider>
  )
}
