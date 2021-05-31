export interface Currency {
  code: string
  name: string
  symbol: string
}

export interface Language {
  name: string
}

export interface CountryInterface {
  name: string
  topLevelDomain: string[]
  capital: string
  region: string
  subregion: string
  population: string
  nativeName: string
  flag: string
  borders: string[]
  cioc: string
  currencies: Currency[]
  languages: Language[]
}
