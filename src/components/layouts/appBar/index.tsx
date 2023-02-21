// ** MUI Imports
import {styled} from '@mui/material/styles'
import MuiAppBar, {AppBarProps} from '@mui/material/AppBar'
import MuiToolbar, {ToolbarProps} from '@mui/material/Toolbar'

import VerticalAppBarContent from "../AppBarContent";

const AppBar = styled(MuiAppBar)<AppBarProps>(({theme}) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'white',
  borderBottom: `1px solid ${theme.palette.grey['200']}`,
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({theme}) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out'
}))

const LayoutAppBar = () => (
  <AppBar
    elevation={0}
    color='default'
    className='layout-navbar'
    position='static'
  >
    <Toolbar className='navbar-content-container'>
      <VerticalAppBarContent/>
    </Toolbar>
  </AppBar>
)


export default LayoutAppBar
