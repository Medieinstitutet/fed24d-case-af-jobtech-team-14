import { useContext } from 'react'
import { SearchBar } from './SearchBar'
import { SearchContext } from '../contexts/SearchContext'
import { FilterContext } from '../contexts/FilterContext'
import { getAds } from '../services/adsService'

export const SearchPanel = () => {
  const { setQuery, setAds } = useContext(SearchContext)
  const {
    selectedFields,
    selectedGroups,
    selectedRegions,
    selectedMunicipalities,
  } = useContext(FilterContext)

  const onSearch = async (searchText: string) => {
    setQuery(searchText)
    const foundAds = await getAds({
      query: searchText,
      selectedRegions,
      selectedMunicipalities,
      selectedFields,
      selectedGroups,
    })

    setAds(foundAds)
  }

  return <SearchBar onSearch={onSearch} />
}
