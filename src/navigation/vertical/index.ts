// ** Type import
import { VerticalNavItemsType } from 'src/components/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Calendar',
      icon: 'mdi:calendar-blank-outline',
      path: '/calendar'
    },
  ]
}

export default navigation
