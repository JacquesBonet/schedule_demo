// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(7.5),
  paddingLeft: theme.spacing(5),
  paddingBottom: theme.spacing(4.5),
  paddingTop: theme.spacing(2.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = () => (
  <MenuHeaderWrapper className='nav-header'>
    <StyledLink href='/'>
      <img src="https://getfluence.com/wp-content/themes/getfluence/assets/img/logo-black.svg" />
    </StyledLink>
  </MenuHeaderWrapper>
)

export default VerticalNavHeader
