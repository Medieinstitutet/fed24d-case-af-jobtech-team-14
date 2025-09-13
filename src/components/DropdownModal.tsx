import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen'
import {
  DigiButton,
  // DigiFormCheckbox,
  DigiFormFieldset,
  DigiIconChevronRight,
  DigiLayoutColumns,
} from '@digi/arbetsformedlingen-react'
import axios from 'axios'
import { useEffect, useState } from 'react'

type OccupationGroup = {
  'taxonomy/id': 'string'
  'taxonomy/type': 'string'
  'taxonomy/preferred-label': 'string'
}

export const DropdownModal = () => {
  const [active, setActive] = useState('')
  const [isToggled, setIsToggled] = useState(false)
  const [occupations, setOccupations] = useState<OccupationGroup[]>([])

  useEffect(() => {
    const fetchOccupationFieldGroups = async () => {
      const groups = await axios.get(
        'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-field',
      )
      const result = await groups.data
      setOccupations(result)
    }
    fetchOccupationFieldGroups()
  }, [])

  console.log(occupations)

  return (
    <DigiLayoutColumns
      className="dropdown-layout"
      afElement={LayoutColumnsElement.DIV}
      afVariation={LayoutColumnsVariation.ONE} // Set to columns 1 | 1
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
              {occupations
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
              {/* {testData.map(td => {
                return td.options.map(o => {
                  return (
                    <DigiFormCheckbox
                      afLabel={o.option}
                      key={o.option}
                    ></DigiFormCheckbox>
                  )
                })
              })} */}
            </DigiFormFieldset>
          </div>
        </div>
      </form>
    </DigiLayoutColumns>
  )
}
