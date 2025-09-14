import axios from 'axios'
import { useEffect, useState } from 'react'
import { getOccupationFields } from '../services/filteringServices'
import type {
  OccupationGroup,
  OccupationField,
} from '../models/occupationModels'
import { Modal } from './Modal'

type DropdownModalProps = {
  filterType: string
}

export const DropdownModal = ({ filterType }: DropdownModalProps) => {
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

  useEffect(() => {
    if (occupationFields.length > 0) return

    const fetchOccupationFieldGroups = async () => {
      const result = await getOccupationFields()
      setOccupationFields(result)
    }
    fetchOccupationFieldGroups()
  })

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
      const res = await axios.get(
        `https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/ssyk?related-ids=${currentId}&type=ssyk-level-4&relation=narrower`,
      )
      const result = await res.data

      const updated = { ...cache, [currentId]: result }
      sessionStorage.setItem('occupation-groups', JSON.stringify(updated))

      setOccupationGroups(result)
    }

    fetchOccupationGroups()
  }, [currentId])

  return (
    <Modal
      occupationFields={occupationFields}
      occupationGroups={occupationGroups}
      filterType={filterType}
      setCurrentId={setCurrentId}
    />
  )
}
