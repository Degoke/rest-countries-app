import React, { useState, useContext, useEffect } from 'react'
import { AllCountries } from '../../../services/all-countries'
import FilterBox from '../../components/filter-box'
import PreviewBox from '../../components/preview-box'
import SearchBox from '../../components/searchbox'
import Wrapper from './style'

const HomePage = (): React.ReactElement => {
  const { countries, filterCountries, searchForCountry } =
    useContext(AllCountries)

  const numberPerPage = 12

  const availablePages = 10

  const pages = countries ? Math.round(countries.length / numberPerPage) : 0

  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [currentPage])

  const goToNextPage = (): void => {
    setCurrentPage((page) => page + 1)
  }

  const goToPreviousPage = (): void => {
    setCurrentPage((page) => page - 1)
  }

  const changePage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCurrentPage(Number(e.currentTarget.textContent))
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
        {searchForCountry && <SearchBox searchForCountry={searchForCountry} />}

        {filterCountries && <FilterBox filterCountries={filterCountries} />}
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
          className="pagination-button"
        >
          prev
        </button>
        {getPaginationGroup().map((item) => (
          <button
            key={item}
            type="button"
            onClick={changePage}
            className={
              currentPage === item
                ? 'pagination-button round current'
                : 'pagination-button round'
            }
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={goToNextPage}
          disabled={currentPage === pages}
          className="pagination-button"
        >
          next
        </button>
      </div>
    </Wrapper>
  )
}

export default HomePage
