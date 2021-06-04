import React, { useEffect, useRef } from 'react'
import { animateFromRight, animateHeader } from '../../../animations/animate'
import { ThemeType } from '../../../context/theme-context'
import Wrapper from './style'

type NavBarProps = {
  toggleTheme: () => void
  theme: ThemeType
}

const NavBar = ({ toggleTheme, theme }: NavBarProps): React.ReactElement => {
  const ref = useRef(null)
  const headerRef = useRef(null)
  useEffect(() => {
    animateHeader(headerRef.current)
    animateFromRight(ref.current)
  }, [])
  return (
    <Wrapper>
      <ul>
        <li>
          <h1 ref={headerRef}>Where in the World?</h1>
        </li>
        <li>
          <button ref={ref} type="button" onClick={toggleTheme}>
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default NavBar
