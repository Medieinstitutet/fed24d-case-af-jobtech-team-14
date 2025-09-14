import { useState } from 'react'
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

type ModalProps = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
  occupationFields: OccupationField[]
  occupationGroups: OccupationGroup[]
  filterType: string
}

export const Modal = ({
  setCurrentId,
  occupationFields,
  occupationGroups,
  filterType,
}: ModalProps) => {
  const [active, setActive] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  if (filterType === 'Yrke') {
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
                <span>Yrken</span>
                <DigiButton
                  className="clear-btn"
                  afSize={ButtonSize.SMALL}
                  afVariation={ButtonVariation.FUNCTION}
                  afFullWidth={false}
                  afType={ButtonType.RESET}
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
}
