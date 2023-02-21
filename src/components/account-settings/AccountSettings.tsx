// ** React Imports
import {ReactElement, useState, useEffect, SyntheticEvent} from 'react'

// ** Next Import
import {useRouter} from 'next/router'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

// ** Icon Imports
import Icon from 'src/components/icon'

// ** Tabs Imports
import TabAccount from 'src/components/account-settings/TabAccount'
import TabSecurity from 'src/components/account-settings/TabSecurity'
import {FlexBox} from "../layouts/flex/Flex";

const AccountSettings = ({tab}: { tab: string }) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)

  // ** Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) =>
    router.push(`/account-settings/${value.toLowerCase()}`)

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList: { [key: string]: ReactElement } = {
    account: <TabAccount/>,
    security: <TabSecurity/>,
  }

  return (
    <FlexBox x='center' y='center'>
      <FlexBox column x='flex-start' y='center'>
        <TabContext value={activeTab}>
          <TabList onChange={handleChange}>
            <Tab value='account' icon={<Icon icon='mdi:account-outline'/>} iconPosition="start" label='Account'
                 sx={{mb: 0, pb: 0}}/>
            <Tab value='security' icon={<Icon icon='mdi:lock-open-outline'/>} iconPosition="start" label='security'
                 sx={{mb: 0, pb: 0}}/>
          </TabList>
          <TabPanel sx={{p: 0, ml: -1}} value={activeTab}>
            {tabContentList[activeTab]}
          </TabPanel>
        </TabContext>
      </FlexBox>
    </FlexBox>
  )
}

export default AccountSettings
