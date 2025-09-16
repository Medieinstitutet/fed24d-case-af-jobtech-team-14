import { useContext } from 'react'
import { SearchBar } from './SearchBar'
import { SearchContext } from '../contexts/SearchContext'
import { FilterContext } from '../contexts/FilterContext'
import { getAds } from '../services/adsService'
import type { IJob } from '../models/IJob'

export const SearchPanel = () => {
  const { query, setQuery, setAds, ads } = useContext(SearchContext)
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

  console.log('ads', ads as IJob)
  console.log(query)

  return <SearchBar onSearch={onSearch} />
}
