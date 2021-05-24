import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeContextProvider, { ThemeContext } from '../context/theme-context'
import { darkTheme, lightTheme } from '../theme/theme'
import GlobalStyle from '../theme/global-style'
import routes from '../routes/routes'
import NavBar from './components/navbar'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <NavBar />
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
