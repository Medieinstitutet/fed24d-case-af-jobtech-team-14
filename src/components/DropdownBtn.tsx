import '../style/SearchPanel.css'

import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'
import {
  DigiButton,
  DigiIconChevronDown,
  DigiIconChevronUp,
} from '@digi/arbetsformedlingen-react'
import { DropdownModal } from './DropdownModal'

type ButtonProps = {
  label: string
  isOpen: boolean
  onToggle: () => void
}

export const ModalBtn = ({ label, isOpen, onToggle }: ButtonProps) => {
  return (
    <div className="btn-wrap">
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.SECONDARY}
        onAfOnClick={onToggle}
        afAriaPressed={isOpen}
      >
        {label}
        <DigiIconChevronUp
          slot="icon-secondary"
          style={{ display: !isOpen ? 'none' : 'block' }}
        />
        <DigiIconChevronDown
          slot="icon-secondary"
          style={{ display: isOpen ? 'none' : 'block' }}
        />
      </DigiButton>
      {isOpen && <DropdownModal />}
    </div>
  )
}
