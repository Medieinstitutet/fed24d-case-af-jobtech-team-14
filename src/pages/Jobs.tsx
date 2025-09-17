import { useContext } from 'react'
import { JobList } from '../components/JobList'
import { LatestSearchAndSavedAdsButtons } from '../components/LatestSearchAndSavedAdsButtons'
import { SearchPanel } from '../components/SearcPanel'
import type { IJob } from '../models/IJob'
import { SearchContext } from '../contexts/SearchContext'

interface JobApiResponse {
  hits: string[]
  total?: { value: number }
}

export const Jobs = () => {
  const { ads } = useContext(SearchContext) as { ads: JobApiResponse }

  const items = ads?.hits || []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jobs: IJob[] = items.map((ad: any, i: number) => {
    const title = ad?.headline || ad?.occupation?.label || 'roll saknas'

    const role = ad?.employer?.name || 'Arbetsgivare saknas'

    const a = ad?.workplace_address

    const location = a
      ? [a.city, a.municipality, a.region, a.country].filter(Boolean).join(', ')
      : 'Plats saknas'

    const publication_date =
      (ad?.puplication_date || ad?.published_at || '').slice(0, 10) ||
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

  return (
    <>
      <SearchPanel />
      <LatestSearchAndSavedAdsButtons />
      <JobList jobs={jobs} />
    </>
  )
}
