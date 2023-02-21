// ** Next Imports
import {useRouter} from 'next/router'

// ** MUI Imports
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

// ** Types
import {NavLink} from 'src/components/layouts/types'

// ** Util Import
import {handleURLQueries} from 'src/components/layouts/utils'
import Icon from "../../icon";
import {ListItemText} from "@mui/material";

interface Props {
  item: NavLink
}

const VerticalNavLink = ({ item }: Props) => {
  const router = useRouter()
  const icon = item.icon

  const isActive = () => (
    router.pathname === item.path || handleURLQueries(router, item.path)
  )

  return (
    <ListItem  disablePadding className='nav-link'>
      <ListItemButton
        className={isActive() ? 'active' : ''}
        selected={isActive()}
        onClick={() => router.push(item?.path || '/')}
      >
        <ListItemIcon>
          <Icon icon={icon as string}/>
        </ListItemIcon>
        <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: isActive() ? 700 : 500 }}/>
      </ListItemButton>
    </ListItem>
  )
}

export default VerticalNavLink
