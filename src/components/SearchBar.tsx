import '../style/SearchPanel.css'

import {
  ButtonSize,
  ButtonVariation,
  FormInputSearchVariation,
  FormInputType,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen'
import {
  DigiButton,
  DigiFormInputSearch,
  DigiIconBell,
  DigiIconX,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiTypography,
} from '@digi/arbetsformedlingen-react'
import { DropdownBtn } from './DropdownBtn'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

type SearchBarProps = {
  onSearch: (searchText: string) => void
  isSomeRegionSelected: boolean
  isSomeOccupationSelected: boolean
}

export const SearchBar = ({
  onSearch,
  isSomeOccupationSelected,
  isSomeRegionSelected,
}: SearchBarProps) => {
  const [openBtn, setOpenBtn] = useState<string | null>(null)
  const [searchText, setSearchText] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="search-panel">
      <DigiLayoutBlock af-variation="primary" className="block">
        <DigiLayoutColumns
          afElement={LayoutColumnsElement.DIV}
          afVariation={LayoutColumnsVariation.ONE}
          className="layout-container"
        >
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h2>Platsbanken</h2>
            <h3>Sök på ett eller flera ord</h3>
          </DigiTypography>
          <DigiTypography />
          <DigiFormInputSearch
            afLabel="Skriv t.ex. målare Malmö"
            afVariation={FormInputSearchVariation.MEDIUM}
            afType={FormInputType.SEARCH}
            afButtonText="Sök"
            className="searchbar"
            afValue={searchText}
            onAfOnInput={(e: CustomEvent) => {
              const value = (e.target as HTMLInputElement).value
              if (typeof value === 'string' && value.trim() !== '') {
                setSearchText(value)
              } else setSearchText('')
            }}
            onAfOnSubmitSearch={() => {
              onSearch(searchText)
              if (location.pathname !== '/annonser') {
                navigate('/annonser')
              }
              const inputEl = document.querySelector(
                '.searchbar input',
              ) as HTMLInputElement | null
              inputEl?.blur()
              setOpenBtn(null)
            }}
          ></DigiFormInputSearch>
          <DigiLayoutColumns
            className="btn-container"
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.FOUR}
          >
            <DropdownBtn
              label="Ort"
              isOpen={openBtn === 'btn2'}
              onToggle={() => setOpenBtn(openBtn === 'btn2' ? null : 'btn2')}
              isSelected={isSomeRegionSelected}
            />
            <DropdownBtn
              label="Yrke"
              isOpen={openBtn === 'btn1'}
              onToggle={() => setOpenBtn(openBtn === 'btn1' ? null : 'btn1')}
              isSelected={isSomeOccupationSelected}
            />

            {/* <DropdownBtn
              label="Filter"
              isOpen={openBtn === 'btn3'}
              onToggle={() => setOpenBtn(openBtn === 'btn3' ? null : 'btn3')}
            /> */}

            <DigiButton
              className="bevaka-btn"
              afSize={ButtonSize.SMALL}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
            >
              <DigiIconBell slot="icon" />
              Bevaka
            </DigiButton>
            <DigiButton
              className="rensa-btn"
              afSize={ButtonSize.SMALL}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
            >
              <DigiIconX slot="icon" />
              Rensa
            </DigiButton>
          </DigiLayoutColumns>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </div>
  )
}
