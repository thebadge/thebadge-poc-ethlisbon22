import type { NextPage } from 'next'
import type { AppContext, AppProps } from 'next/app'
import NextApp from 'next/app'
import dynamic from 'next/dynamic'
import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { SWRConfig } from 'swr'

import { InnerContainer } from '@/src/components/helpers/InnerContainer'
import SafeSuspense from '@/src/components/helpers/SafeSuspense'
import { Main } from '@/src/components/layout/Main'
import { Head } from '@/src/page_partials/index/Head'
import ThemeProvider from '@/src/providers/themeProvider'
import { intlErrorHandler } from '@/src/utils/intlErrorHandler'

// TheBadge UI Library
import 'node_modules/thebadge-ui-library/dist/index.css'

import 'sanitize.css'

const Container = styled(InnerContainer)`
  flex-grow: 1;
  padding-bottom: 25px;
  padding-top: 25px;
`

const Web3ConnectionProvider = dynamic(() => import('@/src/providers/web3ConnectionProvider'), {
  ssr: false,
})

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  messages?: AbstractIntlMessages
}

export default function App({ Component, messages, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Main>{page}</Main>)
  return (
    <>
      <GoogleAnalytics />
      <NextIntlProvider messages={messages} onError={intlErrorHandler}>
        <Head />
        <SWRConfig
          value={{
            suspense: true,
            revalidateOnFocus: false,
          }}
        >
          <Web3ConnectionProvider>
            <ThemeProvider>
              <SafeSuspense>
                {/*      <TransactionNotificationProvider>*/}
                {/*        <CookiesWarningProvider>*/}
                {/*          <Header />*/}
                <Container>{getLayout(<Component {...pageProps} />)}</Container>
                {/* <Footer /> */}
                {/*    </CookiesWarningProvider>*/}
                {/*  </TransactionNotificationProvider>*/}
              </SafeSuspense>
              {/*    <Toast />*/}
            </ThemeProvider>
          </Web3ConnectionProvider>
        </SWRConfig>
      </NextIntlProvider>
    </>
  )
}

App.getInitialProps = async function getInitialProps(context: AppContext) {
  const { locale } = context.router

  return {
    ...(await NextApp.getInitialProps(context)),
    messages: locale ? (await import(`@/messages/${locale}.json`)).default : undefined,
  }
}