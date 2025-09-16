import { createContext } from 'react'

export type SavedJob = { id: string | number; title: string }
export type SavedJobsContextType = {
  saved: SavedJob[]
  saveJob: (job: SavedJob) => void
  removeJob: (id: string | number) => void
  isSaved: (id: string | number) => boolean
}

export const SavedJobsContext = createContext<SavedJobsContextType | undefined>(
  undefined,
)
