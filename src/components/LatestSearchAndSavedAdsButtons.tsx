import {
  DigiButton,
  DigiIconChevronDown,
  DigiIconClock,
  DigiIconHeart,
  DigiLayoutColumns,
  DigiTypography,
} from '@digi/arbetsformedlingen-react'
import { JobListButton } from './JobListButton'
import {
  ButtonSize,
  ButtonVariation,
  LayoutColumnsElement,
  TypographyVariation,
} from '@digi/arbetsformedlingen'
import { useSavedJobs } from '../contexts/useSavedJobs'
import { useState } from 'react'
import { useRecentSearches } from '../contexts/useRecentSearches'

export const LatestSearchAndSavedAdsButtons = () => {
  const { saved, removeJob } = useSavedJobs()
  const [activeList, setActiveList] = useState<'saved' | 'searches' | null>(
    null,
  )
  const { searches } = useRecentSearches()

  const toggleList = (list: 'saved' | 'searches') => {
    setActiveList(prev => (prev === list ? null : list))
  }

  // if (!searches.length) return null

  return (
    <div>
      <DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
        <JobListButton
          text="Senaste Sök-ord"
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
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <ul className="saved-jobs-list">
            {saved.length === 0 ? (
              <p>Inga sparade annonser ännu.</p>
            ) : (
              saved.map(job => (
                <li className="unsave-button" key={job.id}>
                  <h3>
                    <a href={`/annons/${job.id}`}>{job.title}</a>
                  </h3>
                  <DigiButton
                    afSize={ButtonSize.SMALL}
                    afVariation={ButtonVariation.FUNCTION}
                    afFullWidth={true}
                    onClick={e => {
                      e.preventDefault() // så att inte länken triggas
                      e.stopPropagation()
                      removeJob(job.id)
                    }}
                  >
                    Ta bort
                  </DigiButton>
                </li>
              ))
            )}
          </ul>
        </DigiTypography>
      )}

      <DigiTypography afVariation={TypographyVariation.SMALL}>
        {activeList === 'searches' && (
          <ul className="latest-searches-list">
            {searches.length === 0 ? (
              <li>Din senaste sökning kommer visas här…</li>
            ) : (
              searches.map((s, i) => <li key={s || i}>{s}</li>)
            )}
          </ul>
        )}
      </DigiTypography>
    </div>
  )
}
