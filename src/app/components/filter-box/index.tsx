import React, { useRef, useEffect } from 'react'
import { animateFromRight } from '../../../animations/animate'
import Wrapper from './style'

type FilterBoxProps = {
  filterCountries: (e: React.ChangeEvent<HTMLSelectElement>) => Promise<void>
}

const FilterBox = ({ filterCountries }: FilterBoxProps): React.ReactElement => {
  const ref = useRef(null)
  useEffect(() => {
    animateFromRight(ref.current)
  }, [])
  return (
    <Wrapper ref={ref}>
      <label htmlFor="region">
        <select
          name="region"
          id="region"
          onChange={filterCountries}
          defaultValue=""
        >
          <option value="" disabled hidden>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </label>
    </Wrapper>
  )
}

export default FilterBox
