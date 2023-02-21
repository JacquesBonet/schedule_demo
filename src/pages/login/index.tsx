// ** React Imports
import {ReactNode, useState} from 'react'

// ** MUI Components
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography'
import {TypographyStyled, LinkStyled, BoxWrapper} from 'src/components/layouts/utils'
import {FlexBox} from 'src/components/layouts/flex/Flex';

// ** Third Party Imports
import {FormContainer, PasswordElement, TextFieldElement} from 'react-hook-form-mui'

// ** Layout Import
import BlankLayout from 'src/components/layouts/BlankLayout'

// ** Hooks
import {useAuth} from 'src/auth'
import {MessageBox, MsgType} from "../../components/messagebox/MessageBox";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const defaultValues = {
  email: '',
  password: '',
}

const LoginPage = () => {
  const {login} = useAuth()
  const [err, setErr] = useState<MsgType>({value: null, severity: 'error'})

  const handleFormSubmit = (data: typeof defaultValues) => (
    login(data, errorMsg => setErr({value: errorMsg.message, severity: 'error'}))
  )

  return (
    <FlexBox height='100vh' x='center' y='center' backgroundColor='primary.light'>
      <Card>
        <CardContent>
          <FlexBox top={30} left={40} position='absolute' x='center' y='center'>
            <img src="https://getfluence.com/wp-content/themes/getfluence/assets/img/logo-black.svg"/>
          </FlexBox>
          <Box sx={{mb: 3}}>
            <TypographyStyled variant='h4'>Welcome to Getfluence!</TypographyStyled>
            <Typography variant='body1'>Please sign-in to your account</Typography>
          </Box>
          <FormContainer defaultValues={defaultValues} onSuccess={handleFormSubmit}>
            <TextFieldElement name="email" label="user@email.com" type="email" fullWidth required/><br/><br/>
            <PasswordElement name="password" label="Password" fullWidth required/><br/><br/>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{mb: 3}}>
              Login
            </Button>
            <FlexBox x='center' y='center'>
              <Typography variant='body2' sx={{mr: 2}}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <LinkStyled href='/register'>Create an account</LinkStyled>
              </Typography>
            </FlexBox>
          </FormContainer>
        </CardContent>
      </Card>
      <MessageBox msg={err} onClose={() => setErr({value: null, severity: 'error'})} open={!!err.value}/>
    </FlexBox>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
