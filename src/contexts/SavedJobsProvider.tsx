import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { SavedJobsContext, type SavedJob } from './SavedJobsContext'

const STORAGE_KEY = 'savedJobs'

export function SavedJobsProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<SavedJob[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
  }, [saved])

  const saveJob = (job: SavedJob) =>
    setSaved(prev => (prev.some(j => j.id === job.id) ? prev : [...prev, job]))
  const removeJob = (id: string | number) =>
    setSaved(prev => prev.filter(j => j.id !== id))
  const isSaved = (id: string | number) => saved.some(j => j.id === id)

  const value = useMemo(() => ({ saved, saveJob, removeJob, isSaved }), [saved])

  return (
    <SavedJobsContext.Provider value={value}>
      {children}
    </SavedJobsContext.Provider>
  )
}
