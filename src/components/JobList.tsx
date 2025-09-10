import {
  ButtonSize,
  ButtonVariation,
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen'
import {
  DigiButton,
  DigiIconCopy,
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react'

export const JobList = () => {
  return (
    <>
      <section className="jobb-list">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <div className="jobb-container">
            <div className="jobb-text">
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <h2>Handläggare med intresse för Programming</h2>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <p>Socialstyrelsen - Stockholm</p>
                </DigiTypography>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <p>Statistiker</p>
                </DigiTypography>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <p>Publicerad 2 september kl 16.19</p>
                </DigiTypography>
              </DigiTypography>
            </div>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
            >
              <DigiIconCopy slot="icon" />
              En knapp
            </DigiButton>
          </div>
        </DigiLayoutBlock>
      </section>

      {/* <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h2>Handläggare med intresse för Programming</h2>
            <p>Socialstyrelsen - Stockholm</p>
            <p>Statistiker</p>
            <p>Publicerad 2 september kl 16.19</p>
        </DigiTypography>
        </DigiLayoutBlock> */}
    </>
  )
}
