// ** MUI Imports
import Box from '@mui/material/Box'

// ** Types
import { BlankLayoutProps } from './types'

// Styled component for Blank Layout component
const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
      <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
        {children}
      </Box>
  )
}

export default BlankLayout
