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
  const [active, setActive] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  const { selectedGroups, setSelectedGroups, setSelectedFields } =
    useContext<FilterContextType>(FilterContext)

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
              {occupationGroups.map(sg => {
                return (
                  <DigiFormCheckbox
                    afLabel={sg['taxonomy/preferred-label']}
                    key={sg['taxonomy/id']}
                    afChecked={selectedGroups.includes(sg['taxonomy/id'])}
                    onAfOnChange={(e: CustomEvent<{ checked: boolean }>) => {
                      const isChecked = (e.target as HTMLInputElement).checked
                      const id = sg['taxonomy/id']
                      if (isChecked) {
                        setSelectedGroups([...selectedGroups, id])
                      } else {
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
