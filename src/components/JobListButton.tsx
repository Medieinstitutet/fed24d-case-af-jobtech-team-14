import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'
import { DigiButton } from '@digi/arbetsformedlingen-react'

export interface jobListButtonProps {
  text: string
  icon?: React.ReactNode
  iconSecondary?: React.ReactNode
  onClick?: () => void
}

export const JobListButton = ({
  text,
  icon,
  iconSecondary,
  onClick,
}: jobListButtonProps) => {
  return (
    <>
      <div className="af-joblist-scope">
        <DigiButton
          afSize={ButtonSize.LARGE}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={true}
          onClick={onClick}
        >
          {icon}
          {text}
          {iconSecondary}
          {/* <DigiIconArrowDown slot="icon-secondary" /> */}
        </DigiButton>
      </div>
    </>
  )
}
