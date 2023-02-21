// ** MUI Imports
import {styled} from '@mui/material/styles'
import Box, {BoxProps} from '@mui/material/Box'

// ** Components
import AppBar from 'src/components/layouts/appBar'
import Navigation from 'src/components/layouts/navigation'
import VerticalNavItems from "../../navigation/vertical";
import {ReactNode} from "react";

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: '100vh',
  minWidth: 0,
})

const ContentWrapper = styled('main')(({theme}) => ({
  // @ts-ignore
  backgroundColor: theme.palette.primary[200],
  flexGrow: 1,
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  width: '100%',
}))

const Layout = ({children}: { children: ReactNode }) => (
  <>
    <VerticalLayoutWrapper className='layout-wrapper'>
      <Navigation verticalNavItems={VerticalNavItems()}/>
      <MainContentWrapper className='layout-content-wrapper'>
        <AppBar/>
        <ContentWrapper className='layout-page-content'>
          {children}
        </ContentWrapper>
      </MainContentWrapper>
    </VerticalLayoutWrapper>
  </>
)

export default Layout
