// pages/Jobs.tsx
import { useContext, useEffect, useState } from 'react'
import { JobList } from '../components/JobList'
import { LatestSearchAndSavedAdsButtons } from '../components/LatestSearchAndSavedAdsButtons'
import { SearchPanel } from '../components/SearcPanel'
import type { IJob } from '../models/IJob'
import { SearchContext } from '../contexts/SearchContext'
import { FilterContext } from '../contexts/FilterContext' // <-- ny

const buildQueryString = (
  q: string,
  {
    selectedFields,
    selectedGroups,
    selectedRegions,
    selectedMunicipalities,
  }: {
    selectedFields: string[]
    selectedGroups: string[]
    selectedRegions: string[]
    selectedMunicipalities: string[]
  },
) => {
  const params = new URLSearchParams()
  params.set('q', q || 'frontend')
  params.set('limit', '10')
  params.set('offset', '0')

  selectedRegions.forEach(r => params.append('region', r))
  selectedMunicipalities.forEach(m => params.append('municipality', m))
  selectedFields.forEach(f => params.append('occupation-field', f))
  selectedGroups.forEach(g => params.append('occupation-group', g))

  return params.toString()
}

export const Jobs = () => {
  const [jobs, setJobs] = useState<IJob[]>([])
  const { query } = useContext(SearchContext)
  const {
    selectedFields,
    selectedGroups,
    selectedRegions,
    selectedMunicipalities,
  } = useContext(FilterContext) // <-- ny

  useEffect(() => {
    const ac = new AbortController()
    ;(async () => {
      const qs = buildQueryString(query, {
        selectedFields,
        selectedGroups,
        selectedRegions,
        selectedMunicipalities,
      })
      const url = `https://jobsearch.api.jobtechdev.se/search?${qs}`

      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        signal: ac.signal,
      })
      const data = await res.json()
      const items = Array.isArray(data) ? data : data.hits || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mapped: IJob[] = items.map((ad: any, i: number) => {
        const title = ad?.headline || ad?.occupation?.label || 'roll saknas'
        const role = ad?.employer?.name || 'Arbetsgivare saknas'
        const a = ad?.workplace_addresses?.[0] ?? ad?.workplace_adresses?.[0]
        const location = a
          ? [a.city, a.municipality, a.region, a.country]
              .filter(Boolean)
              .join(', ')
          : 'Plats saknas'
        const publication_date =
          (ad?.publication_date || ad?.published_at || '').slice(0, 10) ||
          new Date().toISOString().slice(0, 10)
        const description = ad?.description?.text ?? ad?.description ?? ''
        const application_email = ad?.application_details?.email ?? ''
        const application_url = ad?.application_details?.url ?? ''
        const extent = ad?.working_hours_type?.label ?? ad?.extent?.label ?? ''
        const duration = ad?.duration?.label ?? ''
        const employment_type = ad?.employment_type?.label ?? ''
        const application_deadline =
          (ad?.application_deadline ?? '').slice(0, 10) || ''
        const salary_description =
          ad?.salary_description ?? ad?.salary?.description ?? ''
        const numId =
          typeof ad?.id === 'number'
            ? ad.id
            : parseInt(String(ad?.id).replace(/\D/g, ''), 10) || i + 1

        return {
          id: numId,
          title,
          role,
          location,
          publication_date,
          description,
          application_deadline,
          application_email,
          application_url,
          extent,
          duration,
          employment_type,
          salary_description,
        }
      })

      setJobs(mapped)
    })()
    return () => ac.abort()
  }, [
    query,
    selectedFields,
    selectedGroups,
    selectedRegions,
    selectedMunicipalities,
  ])

  return (
    <>
      <SearchPanel />
      <LatestSearchAndSavedAdsButtons />
      <JobList jobs={jobs} />
    </>
  )
}
