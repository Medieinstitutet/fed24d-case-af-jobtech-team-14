import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'
import { DigiButton } from '@digi/arbetsformedlingen-react'

export interface jobListButtonProps {
  text: string
  icon?: React.ReactNode
  iconSecondary?: React.ReactNode
}

export const JobListButton = ({
  text,
  icon,
  iconSecondary,
}: jobListButtonProps) => {
  return (
    <>
      <DigiButton
        afSize={ButtonSize.LARGE}
        afVariation={ButtonVariation.PRIMARY}
        afFullWidth={true}
      >
        {icon}
        {text}
        {iconSecondary}
        {/* <DigiIconArrowDown slot="icon-secondary" /> */}
      </DigiButton>
    </>
  )
}
