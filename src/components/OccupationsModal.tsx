import { useContext, useState } from 'react'
import type {
  OccupationField,
  OccupationGroup,
} from '../models/occupationModels'
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

type ModalProps = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
  occupationFields: OccupationField[]
  occupationGroups: OccupationGroup[]
}

export const OccupationModal = ({
  setCurrentId,
  occupationFields,
  occupationGroups,
}: ModalProps) => {
  const {
    selectedFields,
    setSelectedFields,
    selectedGroups,
    setSelectedGroups,
  } = useContext<FilterContextType>(FilterContext)

  const [active, setActive] = useState('')
  const [isToggled, setIsToggled] = useState(false)
  const [storedGroups, setStoredGroups] = useState<string[]>([])
  const [indexedGroups, setIndexedGroups] = useState<string[]>([])

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
              <span>Yrkesområden</span>
              <DigiButton
                className="clear-btn"
                afSize={ButtonSize.SMALL}
                afVariation={ButtonVariation.FUNCTION}
                afFullWidth={false}
                afType={ButtonType.RESET}
                onAfOnClick={() => {
                  setSelectedGroups([])
                  setSelectedFields([])
                  setIndexedGroups([])
                  setStoredGroups([])
                }}
              >
                Rensa
              </DigiButton>
            </div>
            <div className="option-wrap">
              {occupationFields
                .sort((a, b) =>
                  a['taxonomy/preferred-label'].localeCompare(
                    b['taxonomy/preferred-label'],
                    'sv',
                  ),
                )
                .map(occ => {
                  return (
                    <DigiButton
                      className="option-btn"
                      afSize={ButtonSize.SMALL}
                      afVariation={ButtonVariation.FUNCTION}
                      afFullWidth={false}
                      key={occ['taxonomy/id']}
                      afAriaPressed={active === occ['taxonomy/id']}
                      onAfOnClick={() => {
                        setActive(occ['taxonomy/id'])
                        setIsToggled(!isToggled)
                        setCurrentId(occ['taxonomy/id'])
                      }}
                    >
                      {occ['taxonomy/preferred-label']}
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
                  &lsaquo; Yrkesområden
                </DigiButton>
              )}
              <span>Yrken</span>

              <DigiButton
                className="clear-btn"
                afSize={ButtonSize.SMALL}
                afVariation={ButtonVariation.FUNCTION}
                afFullWidth={false}
                afType={ButtonType.RESET}
                onAfOnClick={() => {
                  const currentGroupsIds = occupationGroups.map(
                    g => g['taxonomy/id'],
                  )
                  setSelectedGroups(
                    selectedGroups.filter(id => !currentGroupsIds.includes(id)),
                  )
                }}
              >
                Rensa
              </DigiButton>
            </div>
            <DigiFormFieldset afForm="yrken" afName="Yrken">
              {active && (
                <DigiFormCheckbox
                  afLabel="Välj alla yrken"
                  afChecked={selectedFields.includes(active)}
                  onAfOnChange={(e: CustomEvent<{ checked: boolean }>) => {
                    const isChecked = (e.target as HTMLInputElement).checked
                    if (isChecked) {
                      const toAdd = indexedGroups.filter(item =>
                        item.startsWith(`${active}`),
                      )
                      const nextStored = Array.from(
                        new Set([...storedGroups, ...toAdd]),
                      )
                      setStoredGroups(nextStored)
                      setSelectedGroups(prev =>
                        prev.filter(
                          id => !nextStored.some(sm => sm.endsWith(`:${id}`)),
                        ),
                      )
                      setSelectedFields([...selectedFields, active])
                    } else {
                      setSelectedFields(
                        selectedFields.filter(sr => sr !== active),
                      )

                      const nextStored = storedGroups.filter(
                        item => !item.startsWith(`${active}:`),
                      )
                      setStoredGroups(nextStored)

                      const restoredIds = indexedGroups
                        .filter(item => item.startsWith(`${active}:`))
                        .map(item => item.split(':')[1])

                      setSelectedGroups(prev =>
                        Array.from(new Set([...prev, ...restoredIds])),
                      )
                    }
                  }}
                ></DigiFormCheckbox>
              )}
              {occupationGroups.map(sg => {
                return (
                  <DigiFormCheckbox
                    afLabel={sg['taxonomy/preferred-label']}
                    key={sg['taxonomy/id']}
                    afChecked={selectedGroups.includes(sg['taxonomy/id'])}
                    onClick={e => {
                      if (selectedFields.includes(active)) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
                    }}
                    onAfOnChange={(e: CustomEvent<{ checked: boolean }>) => {
                      const isChecked = (e.target as HTMLInputElement).checked
                      const id = sg['taxonomy/id']
                      if (isChecked) {
                        setIndexedGroups(prev =>
                          Array.from(new Set([...prev, `${active}:${id}`])),
                        )

                        setSelectedGroups([...selectedGroups, id])
                      } else {
                        setIndexedGroups(
                          indexedGroups.filter(
                            item => item !== `${active}:${id}`,
                          ),
                        )
                        setSelectedGroups(selectedGroups.filter(g => g !== id))
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
