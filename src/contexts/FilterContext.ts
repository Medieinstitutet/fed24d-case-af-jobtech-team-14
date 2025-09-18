import { createContext } from 'react'

export type FilterContextType = {
  selectedGroups: string[]
  setSelectedGroups: React.Dispatch<React.SetStateAction<string[]>>
  selectedFields: string[]
  setSelectedFields: React.Dispatch<React.SetStateAction<string[]>>
  selectedRegions: string[]
  setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>
  selectedMunicipalities: string[]
  setSelectedMunicipalities: React.Dispatch<React.SetStateAction<string[]>>
  indexedMunicipalities: string[]
  setIndexedMunicipalities: React.Dispatch<React.SetStateAction<string[]>>
  indexedGroups: string[]
  setIndexedGroups: React.Dispatch<React.SetStateAction<string[]>>
}

export const FilterContext = createContext<FilterContextType>({
  selectedGroups: [],
  setSelectedGroups: () => {},
  selectedFields: [],
  setSelectedFields: () => {},
  selectedRegions: [],
  setSelectedRegions: () => {},
  selectedMunicipalities: [],
  setSelectedMunicipalities: () => {},
  indexedMunicipalities: [],
  setIndexedMunicipalities: () => {},
  indexedGroups: [],
  setIndexedGroups: () => {},
})
