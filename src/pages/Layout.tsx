import { useState } from 'react'
import { Outlet } from 'react-router'
import { FilterContext } from '../contexts/FilterContext'
import Header from '../components/Header/Header'

export const Layout = () => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  const [selectedMunicipalities, setSelectedMunicipalities] = useState<
    string[]
  >([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])

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
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </FilterContext.Provider>
  )
}
