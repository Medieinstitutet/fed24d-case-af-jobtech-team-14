import { useContext } from 'react'
import { SearchBar } from './SearchBar'
import { SearchContext } from '../contexts/SearchContext'
import { FilterContext } from '../contexts/FilterContext'
import { getAds } from '../services/adsService'
import { useRecentSearches } from '../contexts/useRecentSearches'

export const SearchPanel = () => {
  const { setQuery, setAds } = useContext(SearchContext)
  const {
    selectedFields,
    selectedGroups,
    selectedRegions,
    selectedMunicipalities,
  } = useContext(FilterContext)

  const { addSearch } = useRecentSearches()

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

    if (foundAds?.hits?.length > 0) {
      addSearch(searchText)
    }
  }

  return <SearchBar onSearch={onSearch} />
}
