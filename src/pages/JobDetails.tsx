import './../style/jobDetails.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router'
import {
  ButtonVariation,
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutColumnsVariation,
  LayoutContainerMaxWidth,
  TypographyVariation,
} from '@digi/arbetsformedlingen'
import {
  DigiButton,
  DigiInfoCard,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react'
import type { IJob } from '../models/IJob'
import { useSavedJobs } from '../contexts/useSavedJobs'

export const JobDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation() as { state?: { job?: IJob } }

  const [job, setJob] = useState<IJob | null>(location.state?.job || null)
  const { isSaved, saveJob, removeJob } = useSavedJobs()
  const saved = job?.id ? isSaved(job.id) : false

  useEffect(() => {
    if (!job && id) {
      ;(async () => {
        const res = await fetch(
          `https://jobsearch.api.jobtechdev.se/ad/${id}`,
          {
            headers: { Accept: 'application/json' },
          },
        )
        const data = await res.json()
        if (data) {
          setJob({
            id: data.id,
            title: data.headline || 'Titel saknas',
            role: data.employer?.name || 'Arbetsgivare saknas',
            location: data?.workplace_addresses?.[0]?.city || 'Plats saknas',
            publication_date:
              data.published_at?.slice(0, 10) ||
              data.last_publication_date?.slice(0, 10) ||
              '',
            description: data.description?.text || '',
            application_email: data.application_details?.email || '',
            application_url: data.application_details?.url || '',
            extent: data.extent?.label || '',
            duration: data.duration?.label || '',
            employment_type: data.employment_type?.label || '',
            application_deadline: data.application_deadline?.slice(0, 10) || '',
            salary_description: data.salary_description || '',
          })
        }
      })()
    }
  }, [id, job])

  if (!job) return <p>Laddar...</p>

  function handleToggleSave() {
    if (!job?.id) return
    if (isSaved(job.id)) {
      removeJob(job.id)
    } else {
      saveJob({ id: job.id, title: job.title })
    }
  }

  return (
    <>
      <div className="job-details-scoped">
        <DigiLayoutContainer
          afNoGutter
          afVerticalPadding
          afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
        >
          <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
            <div
              className="button-back"
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <DigiButton
                afVariation={ButtonVariation.SECONDARY}
                onClick={() => navigate('/annonser')}
              >
                ← Tillbaka
              </DigiButton>
            </div>
            <div
              className="button-save"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <DigiButton
                afVariation={ButtonVariation.PRIMARY}
                onClick={handleToggleSave}
                aria-pressed={saved}
              >
                {saved ? 'Sparad' : 'Spara annons'}
              </DigiButton>
            </div>
          </DigiLayoutColumns>

          <div className="jd-grid">
            <DigiLayoutColumns
              afVariation={LayoutColumnsVariation.TWO}
              className="jd-columns"
            >
              <section className="jd-left">
                <DigiInfoCard
                  className="job-card"
                  afHeading={job.title}
                  afHeadingLevel={InfoCardHeadingLevel.H2}
                  afType={InfoCardType.RELATED}
                  afVariation={InfoCardVariation.PRIMARY}
                  afSize={InfoCardSize.STANDARD}
                >
                  <p>
                    <strong>Publicerad:</strong> {job.publication_date || '—'}
                  </p>
                  {job.description && (
                    <p style={{ marginTop: 8 }}>{job.description}</p>
                  )}
                </DigiInfoCard>
              </section>

              <aside className="jd-aside" style={{ display: 'grid', gap: 16 }}>
                <DigiInfoCard
                  className="jd-cta jd-fake-header"
                  afHeading=" "
                  afHeadingLevel={InfoCardHeadingLevel.H2}
                  afType={InfoCardType.TIP}
                  afVariation={InfoCardVariation.PRIMARY}
                  afSize={InfoCardSize.STANDARD}
                >
                  <div className="button-job">
                    <DigiButton
                      afVariation={ButtonVariation.PRIMARY}
                      onClick={() => {
                        if (job.application_url) {
                          window.open(
                            job.application_url,
                            '_blank',
                            'noopener,noreferrer',
                          )
                        }
                      }}
                    >
                      Ansök jobbet
                    </DigiButton>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <DigiTypography afVariation={TypographyVariation.SMALL}>
                      {job.application_email
                        ? `Kontakt: ${job.application_email}`
                        : 'Kontaktuppgift saknas'}
                      <br />
                      {job.application_deadline
                        ? `Sista ansökningsdag: ${job.application_deadline}`
                        : 'Ingen sista ansökningsdag angiven'}
                    </DigiTypography>
                  </div>
                </DigiInfoCard>

                <DigiInfoCard
                  afHeading="Om anställningen"
                  afHeadingLevel={InfoCardHeadingLevel.H2}
                  afType={InfoCardType.RELATED}
                  afVariation={InfoCardVariation.PRIMARY}
                  afSize={InfoCardSize.STANDARD}
                >
                  <dl
                    className="jd-kv"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: '8px 12px',
                    }}
                  >
                    <dt>
                      <strong>Arbetsgivare</strong>
                    </dt>
                    <dd>{job.role}</dd>
                    <dt>
                      <strong>Plats</strong>
                    </dt>
                    <dd>{job.location}</dd>
                    <dt>
                      <strong>Roll</strong>
                    </dt>
                    <dd>{job.title}</dd>
                    <dt>
                      <strong>Omfattning</strong>
                    </dt>
                    <dd>{job.extent || '—'}</dd>
                    <dt>
                      <strong>Varaktighet</strong>
                    </dt>
                    <dd>{job.duration || '—'}</dd>
                    <dt>
                      <strong>Anställningsform</strong>
                    </dt>
                    <dd>{job.employment_type || '—'}</dd>
                  </dl>
                </DigiInfoCard>

                <DigiInfoCard
                  afHeading="Kvalifikationer"
                  afHeadingLevel={InfoCardHeadingLevel.H2}
                  afType={InfoCardType.RELATED}
                  afVariation={InfoCardVariation.PRIMARY}
                  afSize={InfoCardSize.STANDARD}
                >
                  <ul className="jd-list">
                    <li>Krav och kvalifikationer saknas i datan just nu</li>
                  </ul>
                </DigiInfoCard>
              </aside>
            </DigiLayoutColumns>
          </div>
        </DigiLayoutContainer>
      </div>
    </>
  )
}
