// import { DigiLayoutBlock, DigiMediaImage } from '@digi/arbetsformedlingen-react'
import { useLocation } from 'react-router'
import imageOne from '../assets/image-1.jpg'
import imageTwo from '../assets/image-2.jpg'
import imageThree from '../assets/image-3.jpg'
import imageSix from '../assets/image-6.jpg'
// import { LayoutBlockVariation } from '@digi/arbetsformedlingen'
import '../style/SearchPanel.css'

const imagePool = [imageOne, imageTwo, imageThree, imageSix]

export const ImageBackground = () => {
  const location = useLocation()

  return (
    <div
      className="bg-image-wrap"
      style={
        {
          ...(location.pathname === '/' && { position: 'absolute' }),
          '--digi--layout-block--background--primary': 'var(--color-bg)',
        } as React.CSSProperties
      }
    >
      <img
        src={imagePool[Math.floor(Math.random() * imagePool.length)]}
        alt=""
      />
      {/* <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiMediaImage
          afUnlazy
          afHeight="300px"
          afFullwidth
          afSrc={imagePool[Math.floor(Math.random() * imagePool.length)]}
          afAlt="Arbetsförmedlingens logotyp som en fasadskyld"
        ></DigiMediaImage>
      </DigiLayoutBlock> */}
    </div>
  )
}
