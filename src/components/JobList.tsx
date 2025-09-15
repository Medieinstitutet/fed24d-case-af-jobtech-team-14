import { DigiButton, DigiIconChevronDown } from '@digi/arbetsformedlingen-react'
import { JobListCard } from './JobListCard'
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'
import type { IJob } from '../models/IJob'

export const JobList = ({ jobs }: { jobs: IJob[] }) => {
  return (
    <>
      <div className="sorting-button">
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.FUNCTION}
          afFullWidth={false}
        >
          Sortera
          <DigiIconChevronDown slot="icon" />
        </DigiButton>
      </div>
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
    </>
  )
}
