// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import {useMe, usePutMe} from "src/api/useMe";
import {initialUser, UserType} from "../../types/user.type";

// ** Third Party Imports
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import {useRouter} from "next/router";
import {getHomeRoute} from "src/pages";
import CardHeader from "@mui/material/CardHeader";
import {FlexBox} from "../layouts/flex/Flex";

const TabAccount = () => {
  const {data: userData} = useMe()
  const {mutate} = usePutMe();
  const router = useRouter()

  const handleFormSubmit = (data: UserType) => mutate(data)

  const handleCancel = async () => (
    await router.replace(router.query.returnUrl?.toString() || getHomeRoute())
  )

  return (
      <Card>
        <CardHeader title='Change Profile'/>
        <CardContent>
          <FormContainer defaultValues={userData || initialUser} onSuccess={handleFormSubmit}>
            <FlexBox p={1}>
              <TextFieldElement name="firstName" label="First Name" fullWidth required sx={{mr: 1}}/>
              <TextFieldElement name="lastName" label="Last Name" fullWidth required/>
            </FlexBox>
            <FlexBox p={1}>
              <TextFieldElement name="email" label="user@email.com" type="email" fullWidth disabled sx={{mr: 1}}/>
              <TextFieldElement name="number" label="Number" fullWidth required/>
            </FlexBox>
            <FlexBox p={1}>
              <TextFieldElement name="address" label="Address" fullWidth required/>
            </FlexBox>
            <FlexBox x='flex-start' p={1}>
              <Button type="submit" variant='contained'>
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

export default TabAccount
