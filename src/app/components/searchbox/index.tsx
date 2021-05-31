import React from 'react'
import Wrapper from './style'

type SearchBoxProps = {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBox = ({ handleSearch }: SearchBoxProps): React.ReactElement => {
  return (
    <Wrapper>
      <label htmlFor="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onKeyUp={handleSearch}
        />
      </label>
    </Wrapper>
  )
}

export default SearchBox
