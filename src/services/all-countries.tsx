/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useEffect, useState } from 'react'
import { CountryInterface } from './interfaces'

type ContextProps = {
  children: React.ReactNode
}

type ContextReturnType = {
  countries: CountryInterface[]
  filterCountries?: (e: React.ChangeEvent<HTMLSelectElement>) => Promise<void>
  searchForCountry?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
}

const defaultValues: CountryInterface[] = [
  {
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
    currencies: [
      {
        code: '',
        name: '',
        symbol: '',
      },
    ],
    languages: [
      {
        name: '',
      },
    ],
  },
  {
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
    currencies: [
      {
        code: '',
        name: '',
        symbol: '',
      },
    ],
    languages: [
      {
        name: '',
      },
    ],
  },
]

const getAllCountries = async (): Promise<CountryInterface[]> => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')

  const data = response.json()
  return data
}

const getByRegion = async (region: string): Promise<CountryInterface[]> => {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/region/${region}`
  )

  const data = response.json()
  return data
}

const searchCountry = async (
  tag: string
): Promise<CountryInterface[] | undefined> => {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${tag}`)
  if (response.status === 200) {
    const data = response.json()
    return data
  }
  return undefined
}

export const AllCountries = createContext<ContextReturnType>({
  countries: defaultValues,
})

const AllCountriesProvider = ({ children }: ContextProps) => {
  const [allCountries, setCountries] = useState<CountryInterface[]>()

  const countries = allCountries!

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCountries()
      setCountries(data)
    }
    getData()
  }, [])

  const filterCountries = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    const data = await getByRegion(e.target.value)
    setCountries(data)
  }

  const searchForCountry = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const data = await searchCountry(e.currentTarget.value)
    if (data) {
      setCountries(data)
    } else {
      window.alert('Country Not found')
    }
  }

  return (
    <AllCountries.Provider
      value={{ countries, filterCountries, searchForCountry }}
    >
      {children}
    </AllCountries.Provider>
  )
}

export default AllCountriesProvider
