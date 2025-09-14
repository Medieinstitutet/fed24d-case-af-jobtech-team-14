import './../style/jobDetails.css'
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

export const JobDetails = () => {
  return (
    <div className="job-details-scoped">
      <DigiLayoutContainer
        afNoGutter
        afVerticalPadding
        afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
      >
        {/* Top row */}
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <div
            className="button-back"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <DigiButton
              className="button-back"
              afVariation={ButtonVariation.SECONDARY}
            >
              ← Tillbaka
            </DigiButton>
          </div>
          <div
            className="button-save"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <DigiButton afVariation={ButtonVariation.PRIMARY}>
              Spara annons
            </DigiButton>
          </div>
        </DigiLayoutColumns>

        {/* Main layout */}
        <div className="jd-grid">
          <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
            {/* Left column */}
            <section className="jd-left">
              <DigiInfoCard
                className="job-card"
                afHeading="Om jobbet"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afVariation={InfoCardVariation.PRIMARY}
                afSize={InfoCardSize.STANDARD}
              >
                {/* logo, ingress, description, share links */}
                <p>Produktionsarbete inom fisk …</p>
                {/* Share links as regular links/list */}
              </DigiInfoCard>
            </section>

            {/* Right column (stack) */}
            <aside className="jd-aside" style={{ display: 'grid', gap: 16 }}>
              {/* CTA card */}
              <DigiInfoCard
                className="jd-cta jd-fake-header"
                afHeading=" "
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.TIP}
                afVariation={InfoCardVariation.PRIMARY}
                afSize={InfoCardSize.STANDARD}
              >
                <div className="button-job">
                  <DigiButton afVariation={ButtonVariation.PRIMARY}>
                    Ansök jobbet
                  </DigiButton>
                </div>
                <DigiTypography
                  afVariation={TypographyVariation.SMALL}
                  style={{ marginTop: 8, textAlign: 'center' }}
                >
                  Kontaktuppgifter: namn@test.se
                </DigiTypography>
              </DigiInfoCard>

              {/* About the employment */}
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
                  <dd>FDC Grossist</dd>
                  <dt>
                    <strong>Plats</strong>
                  </dt>
                  <dd>Malmö</dd>
                  <dt>
                    <strong>Roll</strong>
                  </dt>
                  <dd>Fiskarbetare</dd>
                  <dt>
                    <strong>Omfattning</strong>
                  </dt>
                  <dd>Heltid</dd>
                  <dt>
                    <strong>Varaktighet</strong>
                  </dt>
                  <dd>Tillsvidare</dd>
                </dl>
              </DigiInfoCard>

              {/* Qualifications */}
              <DigiInfoCard
                afHeading="Kvalifikationer"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afVariation={InfoCardVariation.PRIMARY}
                afSize={InfoCardSize.STANDARD}
              >
                <ul className="jd-list">
                  <li>Körkort</li>
                  <li>Krav: B</li>
                  <li>Meriterande: Nystartsjobb</li>
                </ul>
              </DigiInfoCard>
            </aside>
          </DigiLayoutColumns>
        </div>
      </DigiLayoutContainer>
    </div>
  )
}
