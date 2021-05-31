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

  const numberPerPage = 12

  const availablePages = 10

  const pages = countries ? Math.round(countries.length / numberPerPage) : 0

  const [currentPage, setCurrentPage] = useState<number>(1)

  const goToNextPage = (): void => {
    setCurrentPage((page) => page + 1)
  }

  const goToPreviousPage = (): void => {
    setCurrentPage((page) => page - 1)
  }

  const changePage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCurrentPage(Number(e.currentTarget.textContent))
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRegion(e.target.value)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault()
    if (e.key === 'Enter') {
      setTag(e.currentTarget.value)
    }
  }

  const startIndex = currentPage * numberPerPage - numberPerPage
  const endIndex = startIndex + numberPerPage

  const getPaginationGroup = () => {
    const start =
      Math.floor((currentPage - 1) / availablePages) * availablePages
    return new Array(availablePages)
      .fill(0)
      .map((_, idx) => start + idx + 1)
      .filter((item) => item <= pages)
  }

  return (
    <Wrapper>
      <div className="search">
        <SearchBox handleSearch={handleSearch} />
        <FilterBox handleChange={handleChange} />
      </div>
      <section>
        {countries?.slice(startIndex, endIndex).map((country) => (
          <PreviewBox country={country} key={country.name} />
        ))}
      </section>
      <div className="buttons">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          prev
        </button>
        {getPaginationGroup().map((item) => (
          <button key={item} type="button" onClick={changePage}>
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={goToNextPage}
          disabled={currentPage === pages}
        >
          next
        </button>
      </div>

      <p>{region}</p>
      <p>{tag}</p>
    </Wrapper>
  )
}

export default HomePage
