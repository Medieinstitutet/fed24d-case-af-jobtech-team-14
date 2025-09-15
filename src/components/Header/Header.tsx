import './../../style/Header.css'
import logo from './../../assets/logo/af-logo.png'
import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from '@digi/arbetsformedlingen-react'

export default function Header() {
  return (
    <div className="header-scoped">
      <DigiHeader
        className="af-header"
        afSystemName=""
        afHideSystemName={true}
        afMenuButtonText="Meny"
      >
        <a
          slot="header-logo"
          href="/"
          aria-label="Startsida"
          className="af-header__brand"
        >
          <img src={logo} alt="Platsbanken" className="logo-af" />
          <span className="af-header__brand-text">Platsbanken</span>
        </a>

        <div slot="header-content" className="af-header__actions">
          <a href="/login" className="af-header__link">
            Logga in
          </a>
          <span className="af-header__sep">|</span>
          <a href="/languages" className="af-header__link">
            Språk
          </a>
          <span className="af-header__sep">|</span>
          <a href="/search" className="af-header__link">
            Sök
          </a>
        </div>

        <div slot="header-navigation">
          <DigiHeaderNavigation
            afCloseButtonText="Stäng"
            afCloseButtonAriaLabel="Stäng meny"
            afNavAriaLabel="Huvudmeny"
            className="button-menu"
          >
            <DigiHeaderNavigationItem>
              <a href="/login">Logga in</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <a href="/languages">Språk</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <a href="/search">Sök</a>
            </DigiHeaderNavigationItem>
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>
    </div>
  )
}
