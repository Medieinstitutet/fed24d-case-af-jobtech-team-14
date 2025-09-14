import {
  DigiIconChevronDown,
  DigiIconClock,
  DigiIconHeart,
  DigiLayoutColumns,
} from '@digi/arbetsformedlingen-react'
import { JobListButton } from './JobListButton'
import { LayoutColumnsElement } from '@digi/arbetsformedlingen'

export const LatestSearchAndSavedAdsButtons = () => {
  return (
    <DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
      <JobListButton
        text="Senaste Sökningar"
        icon={<DigiIconChevronDown slot="icon-secondary" />}
        iconSecondary={<DigiIconClock slot="icon" />}
      />
      <JobListButton
        text="Sparade Ansökningar"
        icon={<DigiIconChevronDown slot="icon-secondary" />}
        iconSecondary={<DigiIconHeart slot="icon" />}
      />
    </DigiLayoutColumns>
  )
}
