// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import toast from 'react-hot-toast'
import {getHomeRoute} from "../../pages";
import {useRouter} from "next/router";
import {FormContainer} from "react-hook-form-mui";
import {useMe, usePutMe} from "../../api/useMe";
import {initialUser} from "../../types/user.type";
import {FlexBox} from "../layouts/flex/Flex";

const initialUserPassword = {
  currentPassword: '',
  confirmPassword: '',
  password: '',
}

const TabSecurity = () => {
  const {data: userData} = useMe()
  const {mutate} = usePutMe();
  const router = useRouter()

  const handleFormSubmit = (data: typeof initialUserPassword) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currentPassword, confirmPassword, ...userData} = data
    mutate(userData)
    toast.success('Password Changed Successfully')
  }

  const handleCancel = async () => (
    await router.replace(router.query.returnUrl?.toString() || getHomeRoute())
  )

  return (
    <Card>
      <CardHeader title='Change Password'/>
      <CardContent>
        <FormContainer defaultValues={userData || initialUser} onSuccess={handleFormSubmit}>
          <Typography>To do</Typography>
          <FlexBox x='flex-start' p={1}>
            <Button variant='contained'>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' onClick={handleCancel}>
              Cancel
            </Button>
          </FlexBox>
        </FormContainer>
      </CardContent>
    </Card>
  )
}

export default TabSecurity
