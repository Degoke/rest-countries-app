import React from 'react'
import Wrapper from './style'

type FilterBoxProps = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const FilterBox = ({ handleChange }: FilterBoxProps): React.ReactElement => {
  return (
    <Wrapper>
      <label htmlFor="region">
        <select
          name="region"
          id="region"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" selected disabled hidden>
            Filter by Region
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">c</option>
        </select>
      </label>
    </Wrapper>
  )
}

export default FilterBox
