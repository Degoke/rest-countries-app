import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CountryInterface } from '../../../services/interfaces'
import Wrapper from './style'
import { animateFromLeft } from '../../../animations/animate'

type PreviewProps = {
  country: CountryInterface
}

const PreviewBox = ({ country }: PreviewProps): React.ReactElement => {
  const ref = useRef(null)
  useEffect(() => {
    animateFromLeft(ref.current)
  }, [])
  return (
    <Wrapper ref={ref}>
      <Link to="/details/nigeria">
        <div className="flag">
          <img src={country.flag} alt="flag" />
        </div>
      </Link>
      <div className="details">
        <Link to="/details/nigeria">
          <h2>{country.name}</h2>
        </Link>
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
