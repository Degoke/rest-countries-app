import React, { useState, useContext } from 'react'
import { AllCountries } from '../../../services/all-countries'
import FilterBox from '../../components/filter-box'
import PreviewBox from '../../components/preview-box'
import SearchBox from '../../components/searchbox'
import Wrapper from './style'

const HomePage = (): React.ReactElement => {
  const [region, setRegion] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const countries = useContext(AllCountries)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRegion(e.target.value)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault()
    if (e.key === 'Enter') {
      setTag(e.currentTarget.value)
    }
  }

  return (
    <Wrapper>
      <div className="search">
        <SearchBox handleSearch={handleSearch} />
        <FilterBox handleChange={handleChange} />
      </div>
      <section>
        {countries
          ?.filter((country, index) => index < 10)
          .map((country) => (
            <PreviewBox country={country} key={country.name} />
          ))}
      </section>

      <p>{region}</p>
      <p>{tag}</p>
    </Wrapper>
  )
}

export default HomePage
