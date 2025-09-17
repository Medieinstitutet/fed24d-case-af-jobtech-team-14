import { Link, NavLink } from 'react-router-dom'
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
        {/* LOGO: byt <a> -> <Link> för SPA-navigering */}
        <Link
          to="/"
          slot="header-logo"
          aria-label="Startsida"
          className="af-header__brand"
        >
          <img src={logo} alt="Platsbanken" className="logo-af" />
          <span className="af-header__brand-text">Platsbanken</span>
        </Link>

        {/* ACTIONS: interna länkar -> Link */}
        <div slot="header-content" className="af-header__actions">
          <Link to="/login" className="af-header__link">
            Logga in
          </Link>
          <span className="af-header__sep">|</span>
          <Link to="/languages" className="af-header__link">
            Språk
          </Link>
          <span className="af-header__sep">|</span>
          <Link to="/search" className="af-header__link">
            Sök
          </Link>
        </div>

        {/* NAV: kan vara Link eller NavLink för active-styling */}
        <div slot="header-navigation">
          <DigiHeaderNavigation
            afCloseButtonText="Stäng"
            afCloseButtonAriaLabel="Stäng meny"
            afNavAriaLabel="Huvudmeny"
            className="button-menu"
          >
            <DigiHeaderNavigationItem>
              <NavLink to="/login">Logga in</NavLink>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <NavLink to="/languages">Språk</NavLink>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <NavLink to="/search">Sök</NavLink>
            </DigiHeaderNavigationItem>
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>
    </div>
  )
}
