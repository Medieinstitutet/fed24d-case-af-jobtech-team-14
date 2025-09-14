import { DigiButton, DigiIconChevronDown } from '@digi/arbetsformedlingen-react'
import { JobListCard } from './JobListCard'
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'

export type IJob = {
  id: number
  title: string
  location: string
  role: string
  publication_date: string
}

export const JobList = () => {
  const jobs: IJob[] = [
    {
      id: 1,
      title: 'Systemutvecklare',
      location: 'Stockholm',
      role: 'Backend Developer',
      publication_date: '2025-09-01',
    },
    {
      id: 2,
      title: 'UX-designer',
      location: 'Göteborg',
      role: 'User Experience Designer',
      publication_date: '2025-08-28',
    },
    {
      id: 3,
      title: 'Projektledare IT',
      location: 'Malmö',
      role: 'Project Manager',
      publication_date: '2025-09-05',
    },
    {
      id: 4,
      title: 'Data Scientist',
      location: 'Uppsala',
      role: 'Statistiker/AI',
      publication_date: '2025-09-03',
    },
    {
      id: 5,
      title: 'Ekonom',
      location: 'Örebro',
      role: 'Controller',
      publication_date: '2025-08-30',
    },
    {
      id: 6,
      title: 'Handläggare',
      location: 'Luleå',
      role: 'Administratör',
      publication_date: '2025-09-07',
    },
    {
      id: 7,
      title: 'Lärare i matematik',
      location: 'Västerås',
      role: 'Gymnasielärare',
      publication_date: '2025-09-02',
    },
    {
      id: 8,
      title: 'HR-specialist',
      location: 'Linköping',
      role: 'HR Partner',
      publication_date: '2025-09-06',
    },
    {
      id: 9,
      title: 'Sjuksköterska',
      location: 'Karlstad',
      role: 'Vård och omsorg',
      publication_date: '2025-08-29',
    },
    {
      id: 10,
      title: 'Front End Developer',
      location: 'Helsingborg',
      role: 'React/JavaScript',
      publication_date: '2025-09-04',
    },
  ]

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
