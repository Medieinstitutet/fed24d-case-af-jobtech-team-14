import { useState } from 'react'
import { Outlet } from 'react-router'
import { FilterContext } from '../contexts/FilterContext'
import { SavedJobsProvider } from '../contexts/SavedJobsProvider'
import Header from '../components/Header/Header'
import { SearchContext } from '../contexts/SearchContext'

export const Layout = () => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  const [selectedMunicipalities, setSelectedMunicipalities] = useState<
    string[]
  >([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])

  const [query, setQuery] = useState('')

  const [ads, setAds] = useState({})

  return (
    <FilterContext.Provider
      value={{
        selectedGroups,
        setSelectedGroups,
        selectedFields,
        setSelectedFields,
        selectedMunicipalities,
        setSelectedMunicipalities,
        selectedRegions,
        setSelectedRegions,
      }}
    >
      <SavedJobsProvider>
        <SearchContext.Provider value={{ query, setQuery, ads, setAds }}>
          <Header />
          <main>
            <Outlet />
          </main>
          <footer></footer>
        </SearchContext.Provider>
      </SavedJobsProvider>
    </FilterContext.Provider>
  )
}
