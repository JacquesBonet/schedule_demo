// ** React Imports

// ** Next Imports
import Head from 'next/head'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'

// ** Emotion Imports
import {CacheProvider} from '@emotion/react'
import type {EmotionCache} from '@emotion/cache'

// ** Config Imports

import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import ThemeComponent from 'src/theme'
import WindowWrapper from 'src/components/window-wrapper'

// ** Contexts
import {AuthProvider} from 'src/auth'

// ** Utils Imports
import {createEmotionCache} from 'src/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import '../../styles/globals.css'
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Layout from "../components/layouts/Layout";

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>)

  const [queryClient] = useState(
    () =>
      new QueryClient()
  )

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template'/>
        <meta name='viewport' content='initial-scale=1, width=device-width'/>
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AuthProvider>
            <ThemeComponent>
              <WindowWrapper>
                {getLayout(<Component {...pageProps} />)}
              </WindowWrapper>
            </ThemeComponent>
          </AuthProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default App
