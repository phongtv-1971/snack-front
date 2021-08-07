import { RouteConfig } from 'react-router-config'
import * as templates from 'components/templates'
import * as pages from './pageLoaders'

const NotFoundRoute = {
  component: pages.NotFound,
  path: '*',
}

const routes: RouteConfig[] = [
  {
    component: templates.Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: pages.Hello,
      },
      NotFoundRoute,
    ],
  },
]

export default routes
