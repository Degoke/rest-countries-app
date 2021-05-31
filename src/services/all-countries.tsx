/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useEffect, useState } from 'react'
import { CountryInterface } from './interfaces'

type ContextProps = {
  children: React.ReactNode
}

/* const DefaultValues = {
  name: '',
  topLevelDomain: [''],
  capital: '',
  region: '',
  subregion: '',
  population: '',
  nativeName: '',
  flag: '',
  borders: [''],
  cioc: '',
  currencies: [{}],
  languages: [{}],
} */

const getAllCountries = async (): Promise<CountryInterface[]> => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')

  const data = response.json()
  return data
}

export const AllCountries =
  createContext<CountryInterface[] | undefined>(undefined)

const AllCountriesProvider = ({ children }: ContextProps) => {
  const [countries, setCountries] = useState<CountryInterface[]>()

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCountries()
      setCountries(data)
    }
    getData()
  }, [])

  if (countries) {
    return (
      <AllCountries.Provider value={countries}>
        {children}
      </AllCountries.Provider>
    )
  }

  return (
    <AllCountries.Provider value={undefined}>{children}</AllCountries.Provider>
  )
}

export default AllCountriesProvider
