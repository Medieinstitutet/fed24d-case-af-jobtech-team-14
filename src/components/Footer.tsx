import { FooterVariation, FooterCardVariation } from '@digi/arbetsformedlingen'
import {
  DigiFooter,
  DigiFooterCard,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
} from '@digi/arbetsformedlingen-react'
import { Link } from 'react-router'
import logo from '../assets/logo/af-logo.png'
import '../style/Footer.css'

export const Footer = () => {
  return (
    <DigiFooter afVariation={FooterVariation.SMALL} className="footer-wrap">
      <div slot="content-top">
        <div>
          <DigiFooterCard afType={FooterCardVariation.ICON}>
            <ul>
              <li>
                <a href="#">
                  <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                  Tillgänglighetsredogörelse
                </a>
              </li>
              <li>
                <a href="#">
                  <DigiIconSign></DigiIconSign>
                  Teckenspråk
                </a>
              </li>
              <li>
                <a href="#">
                  <DigiIconGlobe></DigiIconGlobe>
                  Other languages
                </a>
              </li>
              <li>
                <a href="#">
                  <DigiIconEnvelope></DigiIconEnvelope>
                  Mejla vår funktionbrevlåda
                </a>
              </li>
            </ul>
          </DigiFooterCard>
        </div>
        <div>
          <DigiFooterCard afType={FooterCardVariation.BORDER}>
            <a href="#">Om tjänsten dolores</a>
            <p>
              Systemversion: 1.4.0 <br /> Ansvarig: Jenny Banan
            </p>
          </DigiFooterCard>
        </div>
        <div>
          <DigiFooterCard afType={FooterCardVariation.BORDER}>
            <a href="#">Kontakta servicdolores</a>
            <p>
              Telefon: xxxx-xx xxxx <br /> Öppettider: Vardagar 08:00-16:30
            </p>
          </DigiFooterCard>
        </div>
      </div>
      <div slot="content-bottom-left" className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Platsbanken" className="logo-af" />
          <span className="af-header__brand-text">Platsbanken</span>
        </Link>
      </div>
      <div slot="content-bottom-right">
        <p>Följ oss på</p>
        <a href="#">Facebook</a>
        <a href="#">Youtube</a>
        <a href="#">Linkedin</a>
        <a href="#">Instagram</a>
      </div>
    </DigiFooter>
  )
}
