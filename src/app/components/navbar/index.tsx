import React from 'react'
import { ThemeType } from '../../../context/theme-context'
import Wrapper from './style'

type NavBarProps = {
  toggleTheme: () => void
  theme: ThemeType
}

const NavBar = ({ toggleTheme, theme }: NavBarProps): React.ReactElement => {
  return (
    <Wrapper>
      <ul>
        <li>
          <h1>Where in the World?</h1>
        </li>
        <li>
          <button type="button" onClick={toggleTheme}>
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default NavBar
