import { PersonalAreaRedux } from 'containers/PersonalAreaContainer'
import { Contacts } from 'components/Contacts'

export const routes = [

  {
    path: '/',
    exact: true,
    component: PersonalAreaRedux
  },

]