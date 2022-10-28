import '../styles/globals.css'

import type { NextPage } from 'next'
import type { AppContext, AppProps } from 'next/app'
import NextApp from 'next/app'
import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { SWRConfig } from 'swr'

import { InnerContainer } from '@/src/components/helpers/InnerContainer'
import { Main } from '@/src/components/layout/Main'
import ThemeProvider from '@/src/providers/themeProvider'
import { intlErrorHandler } from '@/src/utils/intlErrorHandler'

const Container = styled(InnerContainer)`
  flex-grow: 1;
  padding-bottom: 25px;
  padding-top: 25px;
`

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
      <NextIntlProvider messages={messages} onError={intlErrorHandler}>
        {/*<Head />*/}
        <SWRConfig
          value={{
            suspense: true,
            revalidateOnFocus: false,
          }}
        >
          {/*<Web3ConnectionProvider>*/}
          <ThemeProvider>
            {/*    <SafeSuspense>*/}
            {/*      <TransactionNotificationProvider>*/}
            {/*        <CookiesWarningProvider>*/}
            {/*          <Header />*/}
            <Container>{getLayout(<Component {...pageProps} />)}</Container>
            {/* <Footer /> */}
            {/*    </CookiesWarningProvider>*/}
            {/*  </TransactionNotificationProvider>*/}
            {/*</SafeSuspense>*/}
            {/*    <Toast />*/}
          </ThemeProvider>
          {/*</Web3ConnectionProvider>*/}
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
