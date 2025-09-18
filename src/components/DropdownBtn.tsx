import '../style/SearchPanel.css'

import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen'
import {
  DigiButton,
  DigiIconChevronDown,
  DigiIconChevronUp,
} from '@digi/arbetsformedlingen-react'
import { Occupations } from './Occupations'
import { Locations } from './Locations'

type ButtonProps = {
  label: string
  isOpen: boolean
  isSelected: boolean
  onToggle: () => void
}

export const DropdownBtn = ({
  label,
  isOpen,
  onToggle,
  isSelected,
}: ButtonProps) => {
  return (
    <div className="btn-wrap">
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.SECONDARY}
        onAfOnClick={onToggle}
        afAriaPressed={isOpen}
        className={`special-btn ${label === 'Ort' ? 'ort-label' : 'yrke-label'}`}
      >
        <span
          className={isSelected ? 'circle-active' : 'circle-hidden'}
          slot="icon"
        ></span>
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
      {label === 'Ort' && isOpen && <Locations />}
      {label === 'Yrke' && isOpen && <Occupations />}
    </div>
  )
}
