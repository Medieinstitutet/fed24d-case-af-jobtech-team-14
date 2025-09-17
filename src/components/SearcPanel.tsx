// components/SearchPanel.tsx
import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { FilterContext } from '../contexts/FilterContext'
import { SearchBar } from './SearchBar'

export const SearchPanel = () => {
  const { setQuery } = useContext(SearchContext)
  const {
    selectedFields,
    setSelectedFields,
    selectedGroups,
    setSelectedGroups,
    selectedRegions,
    setSelectedRegions,
    selectedMunicipalities,
    setSelectedMunicipalities,
  } = useContext(FilterContext)

  const onFiltersChange = (filters: {
    fields?: string[]
    groups?: string[]
    regions?: string[]
    municipalities?: string[]
  }) => {
    if (filters.fields) setSelectedFields(filters.fields)
    if (filters.groups) setSelectedGroups(filters.groups)
    if (filters.regions) setSelectedRegions(filters.regions)
    if (filters.municipalities)
      setSelectedMunicipalities(filters.municipalities)
  }

  return (
    <SearchBar
      onSearch={(text: string) => setQuery(text.trim())}
      selectedFields={selectedFields}
      selectedGroups={selectedGroups}
      selectedRegions={selectedRegions}
      selectedMunicipalities={selectedMunicipalities}
      onFiltersChange={onFiltersChange}
    />
  )
}
