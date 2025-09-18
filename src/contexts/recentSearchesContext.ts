import { createContext } from 'react'

export type RecentSearchesContextType = {
  searches: string[]
  addSearch: (q: string) => void
  clearSearches: () => void
}

export const RecentSearchesContext =
  createContext<RecentSearchesContextType | null>(null)
