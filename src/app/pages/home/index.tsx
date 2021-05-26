import React from 'react'
import MyButton from '../../components/my-button'
import PreviewBox from '../../components/preview-box'

const HomePage = (): React.ReactElement => {
  return (
    <section>
      <PreviewBox />
      <MyButton link="/">Hello</MyButton>
    </section>
  )
}

export default HomePage
