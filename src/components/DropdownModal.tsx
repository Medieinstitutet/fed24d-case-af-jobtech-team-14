import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen'
import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react'

export const DropdownModal = () => {
  return (
    <DigiLayoutColumns
      className="dropdows-layout"
      afElement={LayoutColumnsElement.DIV}
      afVariation={LayoutColumnsVariation.ONE}
    >
      Column here
    </DigiLayoutColumns>
  )
}
