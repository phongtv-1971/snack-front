import React, { lazy } from 'react'

export const Hello: React.ComponentType<any> = lazy(
  () => import('components/pages/Home')
)

export const NotFound: React.ComponentType<any> = lazy(
  () => import('components/pages/NotFound')
)
