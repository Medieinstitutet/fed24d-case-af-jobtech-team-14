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

export const JobList = () => {
  return (
    <>
      <section className="job-list-section">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <div className="job-list-container">
            <div className="job-list-text">
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <h2>Handläggare med intresse för Programming</h2>
              </DigiTypography>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <p>Socialstyrelsen - Stockholm</p>
              </DigiTypography>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <p>Statistiker</p>
              </DigiTypography>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <p>Publicerad 2 september kl 16.19</p>
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
