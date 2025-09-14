import '../style/SearchPanel.css'

import {
  FormInputSearchVariation,
  FormInputType,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen'
import {
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiTypography,
} from '@digi/arbetsformedlingen-react'
import { DropdownBtn } from './DropdownBtn'
import { useState } from 'react'

export const SearchPanel = () => {
  const [openBtn, setOpenBtn] = useState<string | null>(null)

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
          ></DigiFormInputSearch>
          <DigiLayoutColumns
            className="btn-container"
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.THREE}
          >
            <DropdownBtn
              label="Yrke"
              isOpen={openBtn === 'btn1'}
              onToggle={() => setOpenBtn(openBtn === 'btn1' ? null : 'btn1')}
            />
            <DropdownBtn
              label="Ort"
              isOpen={openBtn === 'btn2'}
              onToggle={() => setOpenBtn(openBtn === 'btn2' ? null : 'btn2')}
            />
            <DropdownBtn
              label="Filter"
              isOpen={openBtn === 'btn3'}
              onToggle={() => setOpenBtn(openBtn === 'btn3' ? null : 'btn3')}
            />
          </DigiLayoutColumns>
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </div>
  )
}
