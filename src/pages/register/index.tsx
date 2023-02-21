// ** React Imports
import {ReactNode} from 'react'

// ** MUI Components
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {Card} from "@mui/material";
import Typography from '@mui/material/Typography'
import {TypographyStyled, LinkStyled, BoxWrapper} from 'src/components/layouts/utils'
import {FlexBox} from 'src/components/layouts/flex/Flex';

// ** Third Party Imports
import {FormContainer, PasswordElement, TextFieldElement} from 'react-hook-form-mui'

// ** Layout Import
import BlankLayout from 'src/components/layouts/BlankLayout'

// ** Hooks
import {useAuth} from 'src/auth'
import CardContent from "@mui/material/CardContent";

const defaultValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
}

const Register = () => {
  const {register} = useAuth()

  const handleFormSubmit = (data: typeof defaultValues) => (
    register(data)
  )

  return (
    <FlexBox height='100vh' x='center' y='center' backgroundColor='primary.light'>
      <Card>
        <CardContent>
          <FlexBox top={30} left={40} position='absolute' x='center' y='center'>
            <img src="https://getfluence.com/wp-content/themes/getfluence/assets/img/logo-black.svg"/>
          </FlexBox>
          <Box sx={{mb: 3}}>
            <TypographyStyled variant='h4'>Register to Getfluence!</TypographyStyled>
          </Box>
          <FormContainer defaultValues={defaultValues} onSuccess={handleFormSubmit}>
            <TextFieldElement name="firstName" label="First Name" fullWidth required/><br/><br/>
            <TextFieldElement name="lastName" label="Last Name" fullWidth required/><br/><br/>
            <TextFieldElement name="email" label="user@email.com" type="email" fullWidth required/><br/><br/>
            <PasswordElement name="password" label="Password" fullWidth required/><br/><br/>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{mb: 3}}>
              Sign up
            </Button>
            <FlexBox x='center' y='center'>
              <Typography variant='body2' sx={{mr: 2}}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <LinkStyled href='/login'>Sign in instead</LinkStyled>
              </Typography>
            </FlexBox>
          </FormContainer>
        </CardContent>
      </Card>
    </FlexBox>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Register
