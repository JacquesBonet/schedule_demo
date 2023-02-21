// ** MUI Import
import List from '@mui/material/List'
import Box from '@mui/material/Box'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Type Import
import {NavLink} from 'src/components/layouts/types'

// ** Component Imports
import VerticalNavHeader from './VerticalNavHeader'
import VerticalNavLink from "./VerticalNavLink";
import {styled} from "@mui/material/styles";

interface Props {
  verticalNavItems: any
}

const BoxNavigation = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRight: `1px solid ${theme.palette.grey['200']}`
}))

const Navigation = ({verticalNavItems, ...rest}: Props) => (
  <BoxNavigation>
    <VerticalNavHeader/>
    <Box display='box' overflow='hidden'>
      <PerfectScrollbar>
        <List className='nav-items'>
          {
            verticalNavItems?.map((item: NavLink, index: number) => (
              <VerticalNavLink {...rest} key={index} item={item}/>
            ))
          }
        </List>
      </PerfectScrollbar>
    </Box>
  </BoxNavigation>
)

export default Navigation
