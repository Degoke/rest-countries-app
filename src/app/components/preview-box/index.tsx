import React from 'react'
import { CountryInterface } from '../../../services/interfaces'
import Wrapper from './style'

type PreviewProps = {
  country: CountryInterface
}

const PreviewBox = ({ country }: PreviewProps): React.ReactElement => {
  return (
    <Wrapper>
      <div className="flag">
        <img src={country.flag} alt="flag" />
      </div>
      <div className="details">
        <h2>{country.name}</h2>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </Wrapper>
  )
}

export default PreviewBox
