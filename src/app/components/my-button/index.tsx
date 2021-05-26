/* eslint-disable react/require-default-props */
import React from 'react'
import Wrapper from './style'

type MyButtonProps = {
  link: string
  children: React.ReactNode
}

const MyButton = ({ link, children }: MyButtonProps): React.ReactElement => {
  return <Wrapper href={link}>{children}</Wrapper>
}

export default MyButton
