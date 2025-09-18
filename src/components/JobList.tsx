import { DigiButton, DigiIconChevronDown } from '@digi/arbetsformedlingen-react'
import { JobListCard } from './JobListCard'
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'
import type { IJob } from '../models/IJob'

export const JobList = ({ jobs }: { jobs: IJob[] }) => {
  return (
    <>
      <div className="sorting-button">
        {jobs.length > 0 && (
          <DigiButton
            afSize={ButtonSize.MEDIUM}
            afVariation={ButtonVariation.FUNCTION}
            afFullWidth={false}
          >
            Sortera
            <DigiIconChevronDown slot="icon" />
          </DigiButton>
        )}
      </div>

      {jobs.length > 0 ? (
        <ul className="af-joblist-scope">
          {jobs.map((job, index) => (
            <li
              key={job.id}
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? 'var(--color-card-dark)'
                    : 'var(--color-card-light)',
              }}
            >
              <div>
                <JobListCard job={job} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{ textAlign: 'center', margin: '2rem 0', fontSize: '1.5rem' }}
        >
          Inga jobb hittades, prova söka igen!
        </div>
      )}
    </>
  )
}
