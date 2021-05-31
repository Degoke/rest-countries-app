import React, { useState } from 'react'
import FilterBox from '../../components/filter-box'
import MyButton from '../../components/my-button'
import PreviewBox from '../../components/preview-box'
import SearchBox from '../../components/searchbox'

const HomePage = (): React.ReactElement => {
  const [region, setRegion] = useState<string>('')
  const [tag, setTag] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRegion(e.target.value)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault()
    if (e.key === 'Enter') {
      setTag(e.currentTarget.value)
    }
  }

  return (
    <section>
      <PreviewBox />
      <MyButton link="/">Hello</MyButton>
      <SearchBox handleSearch={handleSearch} />
      <FilterBox handleChange={handleChange} />
      <p>{region}</p>
      <p>{tag}</p>
    </section>
  )
}

export default HomePage
