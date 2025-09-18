import { useContext } from 'react'
import { SearchBar } from './SearchBar'
import { SearchContext } from '../contexts/SearchContext'
import { FilterContext } from '../contexts/FilterContext'
import { getAds } from '../services/adsService'
import { useRecentSearches } from '../contexts/useRecentSearches'
// ⬇️ Byt till hooken från din Provider (uppdatera path efter din struktur)

export const SearchPanel = () => {
  const { setQuery, setAds } = useContext(SearchContext)
  const {
    selectedFields,
    selectedGroups,
    selectedRegions,
    selectedMunicipalities,
  } = useContext(FilterContext)

  const { addSearch } = useRecentSearches() // 🆕

  const onSearch = async (searchText: string) => {
    const q = searchText.trim() // 🆕 trimma
    if (!q) return // 🆕 avbryt om tom

    setQuery(q)

    const foundAds = await getAds({
      query: q, // 🆕 använd q
      selectedRegions,
      selectedMunicipalities,
      selectedFields,
      selectedGroups,
    })

    setAds(foundAds)

    if (foundAds?.hits?.length > 0) {
      addSearch(q) // 🆕 spara trimmad sträng
    }
  }

  return <SearchBar onSearch={onSearch} />
}
