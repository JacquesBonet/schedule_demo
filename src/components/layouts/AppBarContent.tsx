// ** MUI Imports
import Box from '@mui/material/Box'

// ** Components
import UserDropdown from 'src/components/layouts/UserDropdown'

const AppBarContent = () => (
  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
    </Box>
    <Box className='actions-right' sx={{ mr: 0, display: 'flex', alignItems: 'left' }}>
      <UserDropdown />
    </Box>
  </Box>
)


export default AppBarContent
