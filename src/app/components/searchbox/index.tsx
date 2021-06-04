import React, { useEffect, useRef } from 'react'
import { animateFromLeft } from '../../../animations/animate'
import Wrapper from './style'

type SearchBoxProps = {
  searchForCountry: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
}

const SearchBox = ({
  searchForCountry,
}: SearchBoxProps): React.ReactElement => {
  const ref = useRef(null)
  useEffect(() => {
    animateFromLeft(ref.current)
  }, [])
  return (
    <Wrapper ref={ref}>
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
