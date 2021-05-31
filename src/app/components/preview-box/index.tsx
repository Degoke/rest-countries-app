import React from 'react'
import Wrapper from './style'

const PreviewBox = (): React.ReactElement => {
  return (
    <Wrapper>
      <div className="flag">
        <img src="./logo512.png" alt="flag" />
      </div>
      <div className="details">
        <h2>Nigeria</h2>
        <p>
          <strong>Population: </strong>
          1000
        </p>
        <p>
          <strong>Region: </strong>
          Africa
        </p>
        <p>
          <strong>Capital: </strong>
          Vibes
        </p>
      </div>
    </Wrapper>
  )
}

export default PreviewBox
