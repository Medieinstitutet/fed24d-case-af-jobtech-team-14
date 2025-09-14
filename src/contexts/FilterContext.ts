import { createContext } from 'react'

export type FilterContextType = {
  selectedGroups: string[]
  setSelectedGroups: React.Dispatch<React.SetStateAction<string[]>>
  selectedFields: string[]
  setSelectedFields: React.Dispatch<React.SetStateAction<string[]>>
}

export const FilterContext = createContext<FilterContextType>({
  selectedGroups: [],
  setSelectedGroups: () => {},
  selectedFields: [],
  setSelectedFields: () => {},
})
