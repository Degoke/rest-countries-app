import HomePage from '../app/pages/home'

type RouteType = {
  path: string
  name: string
  component: React.FC
}

const routes: RouteType[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
]

export default routes
