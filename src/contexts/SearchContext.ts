import { createContext } from 'react'

export type SearchContextType = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  ads: object
  setAds: React.Dispatch<React.SetStateAction<object>>
}

export const SearchContext = createContext<SearchContextType>({
  query: '',
  setQuery: () => {},
  ads: {},
  setAds: () => {},
})
