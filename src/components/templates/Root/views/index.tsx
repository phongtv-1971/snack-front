import * as React from 'react'
import { Props } from '../types'
import { renderRoutes } from 'react-router-config'

const Root: React.FC<Props> = ({ route }) => (
  <>{route && renderRoutes(route.routes)}</>
)

export default Root
