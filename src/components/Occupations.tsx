import { useEffect, useState } from 'react'
import {
  getOccupationFields,
  getOccupationGroups,
} from '../services/filteringServices'
import type {
  OccupationGroup,
  OccupationField,
} from '../models/occupationModels'
import { OccupationModal } from './OccupationsModal'

export const Occupations = () => {
  const [occupationFields, setOccupationFields] = useState<OccupationField[]>(
    () => {
      const stored = sessionStorage.getItem('occupation-field')
      return stored ? JSON.parse(stored) : []
    },
  )

  const [occupationGroups, setOccupationGroups] = useState<OccupationGroup[]>(
    [],
  )
  const [currentId, setCurrentId] = useState('')

  // Fetch occupation-fields
  useEffect(() => {
    if (occupationFields.length > 0) return

    const fetchOccupationFieldGroups = async () => {
      const result = await getOccupationFields()
      sessionStorage.setItem('occupation-field', JSON.stringify(result))

      setOccupationFields(result)
    }
    fetchOccupationFieldGroups()
  })

  // Fetch occupation-groups
  useEffect(() => {
    if (!currentId) return

    const cache = JSON.parse(
      sessionStorage.getItem('occupation-groups') || '{}',
    )

    if (cache[currentId]) {
      setOccupationGroups(cache[currentId])
      return
    }

    const fetchOccupationGroups = async () => {
      const result = await getOccupationGroups(currentId)
      const updated = { ...cache, [currentId]: result }
      sessionStorage.setItem('occupation-groups', JSON.stringify(updated))

      setOccupationGroups(result)
    }

    fetchOccupationGroups()
  }, [currentId])

  return (
    <OccupationModal
      occupationFields={occupationFields}
      occupationGroups={occupationGroups}
      setCurrentId={setCurrentId}
    />
  )
}
