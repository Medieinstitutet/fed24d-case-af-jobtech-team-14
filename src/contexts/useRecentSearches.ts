import { useEffect, useState } from 'react'

const STORAGE_KEY = 'recentSearches'

export const useRecentSearches = () => {
  const [searches, setSearches] = useState<string[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(searches))
  }, [searches])

  const addSearch = (query: string) => {
    if (!query) return
    setSearches(prev => [query, ...prev.filter(q => q !== query)].slice(0, 5))
  }

  return { searches, addSearch }
}
