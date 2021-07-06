import React, { useState, Suspense, lazy } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeContextProvider, { ThemeType } from '../context/theme-context'
import { darkTheme, lightTheme } from '../theme/theme'
import GlobalStyle from '../theme/global-style'
import NavBar from './components/navbar'
import AllCountriesProvider from '../services/all-countries'
import Loader from './components/utils/loader'
import ErrorBoundary from './components/utils/error-boundary'
import DetailsPage from './pages/details'

const HomePage = lazy(() => import('./pages/home'))

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <ErrorBoundary>
            <NavBar toggleTheme={toggleTheme} theme={theme} />
            <AllCountriesProvider>
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route
                    exact
                    path="/details/:country"
                    component={DetailsPage}
                  />
                </Switch>
              </Suspense>
            </AllCountriesProvider>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
