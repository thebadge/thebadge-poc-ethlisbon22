import type { NextPage } from 'next'
import type { AppContext, AppProps } from 'next/app'
import NextApp from 'next/app'
import dynamic from 'next/dynamic'
import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { BlockExplorer } from '@wagmi/core/dist/declarations/src/constants/blockExplorers'
import { Chain } from '@wagmi/core/dist/declarations/src/types'
import { providers } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { Toast } from 'next/dist/client/components/react-dev-overlay/internal/components/Toast'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { SWRConfig } from 'swr'

import { Header } from '@/src/components/header/Header'
import { InnerContainer } from '@/src/components/helpers/InnerContainer'
import SafeSuspense from '@/src/components/helpers/SafeSuspense'
import { Main } from '@/src/components/layout/Main'
import { getProviderUrl } from '@/src/constants/rpc-providers'
import { Chains } from '@/src/constants/types'
import { Head } from '@/src/page_partials/index/Head'
import { TransactionNotificationProvider } from '@/src/providers/TransactionNotificationProvider'
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

const BackgroundGradient = styled('div')`
  background: linear-gradient(154.96deg, #0b3f33 9.89%, #369485 54.65%, #900d90 100.15%);
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  position: fixed;
  /* z-index usage is up to you.. although there is no need of using it because the default stack context will work. */
  zindex: -1;
`
// @todo (agustin) move everything to a specific place
const GNOSIS_CHAIN_RPC_URL = 'https://rpc.gnosischain.com/'

const blockExplorerGnosis: BlockExplorer = {
  name: 'gnosisChain',
  url: 'https://gnosisscan.io/',
}

const gnosisTestnet: Chain = {
  id: 100,
  name: 'Gnosis',
  network: 'gnosis',
  rpcUrls: {
    default: GNOSIS_CHAIN_RPC_URL,
  },
  blockExplorers: {
    default: blockExplorerGnosis,
    etherscan: blockExplorerGnosis,
  },
  testnet: false,
}

const blockExplorerGoerli: BlockExplorer = {
  name: 'goerli',
  url: 'https://goerli.etherscan.io/',
}

const goerli: Chain = {
  id: 5,
  name: 'Görli Testnet',
  network: 'Goerli',
  rpcUrls: {
    default: getProviderUrl(Chains.goerli),
  },
  blockExplorers: {
    default: blockExplorerGoerli,
    etherscan: blockExplorerGoerli,
  },
  testnet: true,
}

const config = {
  projectId: '037ea4aa9e1aa043b3d617ec1c4f708f',
  ethereum: {
    appName: 'The Badge',
    autoConnect: true,
    chains: [gnosisTestnet, goerli],
    providers: [
      providers.walletConnectProvider({
        projectId: '037ea4aa9e1aa043b3d617ec1c4f708f',
      }),
    ],
  },
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
                <TransactionNotificationProvider>
                  <Header />
                  <BackgroundGradient />
                  <Container>{getLayout(<Component {...pageProps} />)}</Container>
                </TransactionNotificationProvider>
              </SafeSuspense>
              <Toast />
              <Web3Modal config={config} />
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
