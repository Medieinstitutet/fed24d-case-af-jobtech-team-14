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
  const {
    selectedRegions,
    setSelectedRegions,
    selectedMunicipalities,
    setSelectedMunicipalities,
  } = useContext<FilterContextType>(FilterContext)

  const [active, setActive] = useState('')
  const [isToggled, setIsToggled] = useState(false)
  const [storedMunicipalities, setStoredMunicipalities] = useState<string[]>([])
  const [indexedMunicipalities, setIndexedMunicipalites] = useState<string[]>(
    [],
  )

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
                  setIndexedMunicipalites([])
                  setStoredMunicipalities([])
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
              {isToggled && (
                <DigiButton
                  className="back-btn"
                  afSize={ButtonSize.SMALL}
                  afVariation={ButtonVariation.FUNCTION}
                  afFullWidth={false}
                  afType={ButtonType.RESET}
                  onAfOnClick={() => {
                    setIsToggled(!isToggled)
                  }}
                >
                  &lsaquo; Län
                </DigiButton>
              )}
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
              {active && (
                <DigiFormCheckbox
                  afLabel="Välj alla kommuner"
                  afChecked={selectedRegions.includes(active)}
                  onAfOnChange={(e: CustomEvent<{ checked: boolean }>) => {
                    const isChecked = (e.target as HTMLInputElement).checked
                    if (isChecked) {
                      const toAdd = indexedMunicipalities.filter(item =>
                        item.startsWith(`${active}`),
                      )
                      const nextStored = Array.from(
                        new Set([...storedMunicipalities, ...toAdd]),
                      )
                      setStoredMunicipalities(nextStored)
                      setSelectedMunicipalities(prev =>
                        prev.filter(
                          id => !nextStored.some(sm => sm.endsWith(`:${id}`)),
                        ),
                      )
                      setSelectedRegions([...selectedRegions, active])
                    } else {
                      setSelectedRegions(
                        selectedRegions.filter(sr => sr !== active),
                      )

                      const nextStored = storedMunicipalities.filter(
                        item => !item.startsWith(`${active}:`),
                      )
                      setStoredMunicipalities(nextStored)

                      const restoredIds = indexedMunicipalities
                        .filter(item => item.startsWith(`${active}:`))
                        .map(item => item.split(':')[1])

                      setSelectedMunicipalities(prev =>
                        Array.from(new Set([...prev, ...restoredIds])),
                      )
                    }
                  }}
                ></DigiFormCheckbox>
              )}
              {municipalities.map(m => {
                return (
                  <DigiFormCheckbox
                    afLabel={m['taxonomy/preferred-label']}
                    key={m['taxonomy/id']}
                    afChecked={
                      selectedRegions.includes(active)
                        ? false
                        : selectedMunicipalities.includes(m['taxonomy/id'])
                    }
                    onClick={e => {
                      if (selectedRegions.includes(active)) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
                    }}
                    onAfOnChange={(e: CustomEvent<{ checked: boolean }>) => {
                      const isChecked = (e.target as HTMLInputElement).checked
                      const id = m['taxonomy/id']
                      if (isChecked) {
                        setIndexedMunicipalites(prev =>
                          Array.from(new Set([...prev, `${active}:${id}`])),
                        )

                        setSelectedMunicipalities([
                          ...selectedMunicipalities,
                          id,
                        ])
                      } else {
                        setIndexedMunicipalites(
                          indexedMunicipalities.filter(
                            item => item !== `${active}:${id}`,
                          ),
                        )
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
