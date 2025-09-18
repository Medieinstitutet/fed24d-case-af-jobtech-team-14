import { useContext } from 'react'
import { RecentSearchesContext } from './recentSearchesContext'

export function useRecentSearches() {
  const ctx = useContext(RecentSearchesContext)
  if (!ctx)
    throw new Error(
      'useRecentSearches måste användas inuti RecentSearchesProvider',
    )
  return ctx
}
