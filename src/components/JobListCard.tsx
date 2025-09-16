import {
  ButtonSize,
  ButtonVariation,
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen'
import {
  DigiButton,
  DigiIconHeart,
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react'
import type { IJob } from './JobList'
import { Link } from 'react-router'
import { useSavedJobs } from '../contexts/useSavedJobs'

interface JobListCardProps {
  job: IJob
}

export const JobListCard = ({ job }: JobListCardProps) => {
  const { saveJob, removeJob, isSaved } = useSavedJobs()
  const jobIsSaved = isSaved(job.id)
  const link = `/annons/${job.id}`

  const handleSave = () => {
    if (jobIsSaved) removeJob(job.id)
    else saveJob({ id: job.id, title: job.title })
  }

  return (
    <>
      <section className="job-list-section">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <div className="job-list-container">
            <div className="job-list-text">
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <h2>
                  <Link to={link}>{job.title}</Link>
                </h2>
              </DigiTypography>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <p>{job.location}</p>
              </DigiTypography>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <p>{job.role}</p>
              </DigiTypography>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <p>{job.publication_date}</p>
              </DigiTypography>
              {/* </DigiTypography> */}
            </div>
            <div className="jobb-actions">
              <DigiButton
                onClick={handleSave}
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.FUNCTION}
                afFullWidth={false}
              >
                <DigiIconHeart slot="icon" />
                {jobIsSaved ? 'Sparad' : 'Spara'}
              </DigiButton>
            </div>
          </div>
        </DigiLayoutBlock>
      </section>
    </>
  )
}
