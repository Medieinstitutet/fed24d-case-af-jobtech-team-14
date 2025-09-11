import {
  ButtonVariation,
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutColumnsVariation,
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
    <>
      <DigiLayoutContainer>
        {/* Topprad */}
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <DigiButton afVariation={ButtonVariation.SECONDARY}>
              ← Tillbaka
            </DigiButton>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <DigiButton afVariation={ButtonVariation.PRIMARY}>
              Spara annons till senare
            </DigiButton>
          </div>
        </DigiLayoutColumns>

        {/* Huvudlayout */}
        <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
          {/* Vänster kolumn */}
          <div>
            <DigiInfoCard
              afHeading="Om jobbet"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afVariation={InfoCardVariation.PRIMARY}
              afSize={InfoCardSize.STANDARD}
            >
              {/* logo, ingress, beskrivning, dela-länkar */}
              <p>Produktionsarbete inom fisk …</p>
              {/* Dela-länkar som vanliga länkar/lista */}
            </DigiInfoCard>
          </div>

          {/* Höger kolumn (stapel) */}
          <aside style={{ display: 'grid', gap: 16 }}>
            {/* CTA-kort */}
            <DigiInfoCard
              afHeading=" "
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.TIP}
              afVariation={InfoCardVariation.PRIMARY}
              afSize={InfoCardSize.STANDARD}
            >
              <DigiButton afVariation={ButtonVariation.PRIMARY} afFullWidth>
                Ansök jobbet
              </DigiButton>
              <DigiTypography
                afVariation={TypographyVariation.SMALL}
                style={{ marginTop: 8 }}
              >
                Kontaktuppgifter: namn@test.se
              </DigiTypography>
            </DigiInfoCard>

            {/* Om anställningen */}
            <DigiInfoCard
              afHeading="Om anställningen"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afVariation={InfoCardVariation.PRIMARY}
              afSize={InfoCardSize.STANDARD}
            >
              <dl
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

            {/* Kvalifikationer */}
            <DigiInfoCard
              afHeading="Kvalifikationer"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afVariation={InfoCardVariation.PRIMARY}
              afSize={InfoCardSize.STANDARD}
            >
              <ul>
                <li>Körkort</li>
                <li>Krav: B</li>
                <li>Meriterande: Nystartsjobb</li>
              </ul>
            </DigiInfoCard>
          </aside>
        </DigiLayoutColumns>

        {/* (Valfritt) relaterade jobb som flera små kort */}
        {/* 
  <DigiInfoCardMultiContainer>
    <DigiInfoCardMulti …>…</DigiInfoCardMulti>
    <DigiInfoCardMulti …>…</DigiInfoCardMulti>
    <DigiInfoCardMulti …>…</DigiInfoCardMulti>
  </DigiInfoCardMultiContainer>
  */}
      </DigiLayoutContainer>
    </>
  )
}
