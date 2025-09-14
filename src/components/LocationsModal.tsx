import { useContext, useState } from 'react'

import {
  DigiButton,
  DigiFormCheckbox,
  DigiFormFieldset,
  DigiIconChevronRight,
  DigiLayoutColumns,
} from '@digi/arbetsformedlingen-react'
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen'
import {
  FilterContext,
  type FilterContextType,
} from '../contexts/FilterContext'
import type { Municipality, Region } from '../models/locationModels'

type ModalProps = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
  regions: Region[]
  municipalities: Municipality[]
}

export const LocationsModal = ({
  setCurrentId,
  regions,
  municipalities,
}: ModalProps) => {
  const [active, setActive] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  const {
    setSelectedRegions,
    selectedMunicipalities,
    setSelectedMunicipalities,
  } = useContext<FilterContextType>(FilterContext)

  return (
    <DigiLayoutColumns
      className="dropdown-layout"
      afElement={LayoutColumnsElement.DIV}
      afVariation={LayoutColumnsVariation.ONE}
    >
      <form className="dropdown-form">
        <div className={`${isToggled ? 'hidden' : ''}`}>
          <div className="dropdown-wrap">
            <div className="dropdown-label">
              <span>Län</span>
              <DigiButton
                className="clear-btn"
                afSize={ButtonSize.SMALL}
                afVariation={ButtonVariation.FUNCTION}
                afFullWidth={false}
                afType={ButtonType.RESET}
                onAfOnClick={() => {
                  setSelectedRegions([])
                  setSelectedMunicipalities([])
                }}
              >
                Rensa
              </DigiButton>
            </div>
            <div className="option-wrap">
              {regions
                .sort((a, b) =>
                  a['taxonomy/preferred-label'].localeCompare(
                    b['taxonomy/preferred-label'],
                    'sv',
                  ),
                )
                .map(r => {
                  return (
                    <DigiButton
                      className="option-btn"
                      afSize={ButtonSize.SMALL}
                      afVariation={ButtonVariation.FUNCTION}
                      afFullWidth={false}
                      key={r['taxonomy/id']}
                      afAriaPressed={active === r['taxonomy/id']}
                      onAfOnClick={() => {
                        setActive(r['taxonomy/id'])
                        setIsToggled(!isToggled)
                        setCurrentId(r['taxonomy/id'])
                      }}
                    >
                      {r['taxonomy/preferred-label']}
                      <DigiIconChevronRight
                        slot="icon-secondary"
                        className="option-chevron"
                      />
                    </DigiButton>
                  )
                })}
            </div>
          </div>
        </div>
        <div className={`${isToggled ? '' : 'hidden'}`}>
          <div className="dropdown-wrap">
            <div className="dropdown-label">
              <span>Kommuner</span>
              <DigiButton
                className="clear-btn"
                afSize={ButtonSize.SMALL}
                afVariation={ButtonVariation.FUNCTION}
                afFullWidth={false}
                afType={ButtonType.RESET}
                onAfOnClick={() => {
                  const currentMunicipalitiesIds = municipalities.map(
                    m => m['taxonomy/id'],
                  )
                  setSelectedMunicipalities(
                    selectedMunicipalities.filter(
                      id => !currentMunicipalitiesIds.includes(id),
                    ),
                  )
                }}
              >
                Rensa
              </DigiButton>
            </div>
            <DigiFormFieldset afForm="yrken" afName="Yrken">
              {municipalities.map(m => {
                return (
                  <DigiFormCheckbox
                    afLabel={m['taxonomy/preferred-label']}
                    key={m['taxonomy/id']}
                    afChecked={selectedMunicipalities.includes(
                      m['taxonomy/id'],
                    )}
                    onAfOnChange={(e: CustomEvent<{ checked: boolean }>) => {
                      const isChecked = (e.target as HTMLInputElement).checked
                      const id = m['taxonomy/id']
                      if (isChecked) {
                        setSelectedMunicipalities([
                          ...selectedMunicipalities,
                          id,
                        ])
                      } else {
                        setSelectedMunicipalities(
                          selectedMunicipalities.filter(g => g !== id),
                        )
                      }
                    }}
                  ></DigiFormCheckbox>
                )
              })}
            </DigiFormFieldset>
          </div>
        </div>
      </form>
    </DigiLayoutColumns>
  )
}
