import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeContextProvider, { ThemeType } from '../context/theme-context'
import { darkTheme, lightTheme } from '../theme/theme'
import GlobalStyle from '../theme/global-style'
import routes from '../routes/routes'
import NavBar from './components/navbar'

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = (): void => {
    if (setTheme) {
      if (theme === 'light') {
        setTheme('dark')
        return
      }
      setTheme('light')
    }
  }

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <NavBar toggleTheme={toggleTheme} theme={theme} />
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.name}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
