import { useEffect, useState } from 'react'
import { getRegions, getMunicipalities } from '../services/filteringServices'
import type { Region, Municipality } from '../models/locationModels'
import { LocationsModal } from './LocationsModal'

export const Locations = () => {
  const [regions, setRegions] = useState<Region[]>(() => {
    const stored = sessionStorage.getItem('regions')
    return stored ? JSON.parse(stored) : []
  })

  const [municipalities, setMunicipalities] = useState<Municipality[]>([])
  const [currentId, setCurrentId] = useState('')

  // Fetch regions
  useEffect(() => {
    if (regions.length > 0) return

    const fetchRegions = async () => {
      const result = await getRegions()
      sessionStorage.setItem('regions', JSON.stringify(result))

      setRegions(result)
    }
    fetchRegions()
  })

  // Fetch municipalities
  useEffect(() => {
    if (!currentId) return

    const cache = JSON.parse(sessionStorage.getItem('municipalities') || '{}')

    if (cache[currentId]) {
      setMunicipalities(cache[currentId])
      return
    }

    const fetchMunicipalities = async () => {
      const result = await getMunicipalities(currentId)
      const updated = { ...cache, [currentId]: result }
      sessionStorage.setItem('municipalities', JSON.stringify(updated))

      setMunicipalities(result)
    }

    fetchMunicipalities()
  }, [currentId])

  return (
    <LocationsModal
      setCurrentId={setCurrentId}
      regions={regions}
      municipalities={municipalities}
    />
  )
}
