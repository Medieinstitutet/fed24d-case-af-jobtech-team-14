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

export const JobListCard = ({ job }: { job: IJob }) => {
  return (
    <>
      <section className="job-list-section">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <div className="job-list-container">
            <div className="job-list-text">
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <h2>{job.title}</h2>
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
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.FUNCTION}
                afFullWidth={false}
              >
                <DigiIconHeart slot="icon" />
                Spara
              </DigiButton>
            </div>
          </div>
        </DigiLayoutBlock>
      </section>
    </>
  )
}
