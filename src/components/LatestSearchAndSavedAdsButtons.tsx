import {
  DigiIconChevronDown,
  DigiIconClock,
  DigiIconHeart,
  DigiLayoutColumns,
} from '@digi/arbetsformedlingen-react'
import { JobListButton } from './JobListButton'
import { LayoutColumnsElement } from '@digi/arbetsformedlingen'
import { useSavedJobs } from '../contexts/useSavedJobs'
import { useState } from 'react'

export const LatestSearchAndSavedAdsButtons = () => {
  const { saved } = useSavedJobs()
  const [activeList, setActiveList] = useState<'saved' | 'searches' | null>(
    null,
  )

  const toggleList = (list: 'saved' | 'searches') => {
    setActiveList(prev => (prev === list ? null : list))
  }

  return (
    <div>
      <DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
        <JobListButton
          text="Senaste Sökningar"
          icon={<DigiIconChevronDown slot="icon-secondary" />}
          iconSecondary={<DigiIconClock slot="icon" />}
          onClick={() => toggleList('searches')}
        />
        <JobListButton
          text="Sparade Ansökningar"
          icon={<DigiIconChevronDown slot="icon-secondary" />}
          iconSecondary={<DigiIconHeart slot="icon" />}
          onClick={() => toggleList('saved')}
        />
      </DigiLayoutColumns>

      {activeList === 'saved' && (
        <ul className="saved-jobs-list">
          {saved.length === 0 ? (
            <li>Inga sparade annonser ännu.</li>
          ) : (
            saved.map(job => (
              <li key={job.id}>
                <a href={`/annons/${job.id}`}>{job.title}</a>
              </li>
            ))
          )}
        </ul>
      )}

      {activeList === 'searches' && (
        <ul className="latest-searches-list">
          <li>Din senaste sökning kommer visas här…</li>
        </ul>
      )}
    </div>
  )
}
