import { useContext } from 'react'
import { SavedJobsContext } from './SavedJobsContext'

export function useSavedJobs() {
  const ctx = useContext(SavedJobsContext)
  if (!ctx)
    throw new Error('useSavedJobs måste användas inuti SavedJobsProvider')
  return ctx
}
