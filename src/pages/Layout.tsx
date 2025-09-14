import { useState } from 'react'
import { Outlet } from 'react-router'
import { FilterContext } from '../contexts/FilterContext'

export const Layout = () => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  return (
    <FilterContext.Provider
      value={{
        selectedGroups,
        setSelectedGroups,
        selectedFields,
        setSelectedFields,
      }}
    >
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </FilterContext.Provider>
  )
}
