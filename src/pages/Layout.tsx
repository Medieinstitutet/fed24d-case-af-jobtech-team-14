import { useState } from 'react'
import { Outlet } from 'react-router'
import { FilterContext } from '../contexts/FilterContext'
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
      <SearchContext.Provider value={{ query, setQuery }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </SearchContext.Provider>
    </FilterContext.Provider>
  )
}
