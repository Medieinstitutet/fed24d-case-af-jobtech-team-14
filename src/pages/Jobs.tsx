import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { JobList } from '../components/JobList'
import { LatestSearchAndSavedAdsButtons } from '../components/LatestSearchAndSavedAdsButtons'
import { SearchPanel } from '../components/SearcPanel'
import type { IJob } from '../models/IJob'

export const Jobs = () => {
  const [jobs, setJobs] = useState<IJob[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        'https://jobsearch.api.jobtechdev.se/search?q=frontend&limit=10&offset=0',
        { headers: { Accept: 'application/json' } },
      )
      const data = await res.json()
      const items = Array.isArray(data) ? data : data.hits || []

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mapped: IJob[] = items.map((ad: any, i: number) => {
        const title = ad?.headline || ad?.occupation?.label || 'roll saknas'
        const role = ad?.employer?.name || 'Arbetsgivare saknas'
        const a = ad?.workplace_adresses?.[0]
        const location = a
          ? [a.city, a.municipality, a.region, a.country]
              .filter(Boolean)
              .join(', ')
          : 'Plats saknas'
        const publication_date =
          (ad?.puplication_date || ad?.published_at || '').slice(0, 10) ||
          new Date().toISOString().slice(0, 10)
        const numId =
          typeof ad?.id === 'number'
            ? ad.id
            : parseInt(String(ad?.id).replace(/\D/g, ''), 10) || i + 1

        return { id: numId, title, role, location, publication_date }
      })

      setJobs(mapped)
    })()
  }, [])

  return (
    <>
      <Header />
      <SearchPanel />
      <LatestSearchAndSavedAdsButtons />
      <JobList jobs={jobs} />
    </>
  )
}
