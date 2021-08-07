import React from 'react'
import { NotFoundWrap } from './styles'
import notFoundImage from '../images/lol.gif'

const NotFound = () => {
  return (
    <NotFoundWrap>
      <img src={notFoundImage} alt={'Not found'} />
      <h3>Not found</h3>
    </NotFoundWrap>
  )
}

export default NotFound
