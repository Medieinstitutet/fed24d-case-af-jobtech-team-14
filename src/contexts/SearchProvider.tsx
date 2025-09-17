// context/SearchProvider.tsx
import { useState } from 'react'
import { SearchContext } from './SearchContext'

export const SearchProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [query, setQuery] = useState('') // start tomt

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
