import { createContext } from 'react'

export type SearchContextType = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType>({
  query: '',
  setQuery: () => {},
})
