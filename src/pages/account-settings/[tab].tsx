// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Demo Components Imports
import AccountSettings from 'src/components/account-settings/AccountSettings'

const AccountSettingsTab = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AccountSettings tab={tab} />
}

export const getStaticPaths: GetStaticPaths = () => ({
    paths: [
      { params: { tab: 'account' } },
      { params: { tab: 'security' } },
    ],
    fallback: false
  }
)

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => ({
    props: {
      tab: params?.tab,
    }
  }
)

export default AccountSettingsTab
