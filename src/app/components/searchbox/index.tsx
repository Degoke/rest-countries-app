import React from 'react'
import Wrapper from './style'

type SearchBoxProps = {
  searchForCountry: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
}

const SearchBox = ({
  searchForCountry,
}: SearchBoxProps): React.ReactElement => {
  return (
    <Wrapper>
      <label htmlFor="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={searchForCountry}
        />
      </label>
    </Wrapper>
  )
}

export default SearchBox
