import styled, { keyframes } from 'styled-components'

import { useAccount, useNetwork, useSwitchNetwork } from '@web3modal/react'
import { Button } from 'thebadge-ui-library'

import { getNetworkConfig } from '@/src/constants/chains'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const loadingAnimation = keyframes`
  0% {
    opacity: var(--inline-loading-opacity-start);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: var(--inline-loading-opacity-start);
  }
`

const Content = styled.div`
  --inline-loading-opacity-start: 0.4;

  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: ${loadingAnimation};
  animation-timing-function: ease-in-out;
  color: ${({ theme }) => theme.colors.error};
  font-style: italic;

  display: flex;
  align-items: center;
`

export default function WrongNetwork() {
  const { account } = useAccount()
  const { network } = useNetwork()
  const isWalletNetworkSupported = !network?.chain?.unsupported || false
  const { appChainId } = useWeb3Connection()
  const isWalletConnected = account.isConnected
  const { switchNetwork } = useSwitchNetwork({
    chainId: 100,
  })
  const appChain = getNetworkConfig(appChainId)
  return isWalletConnected && !isWalletNetworkSupported ? (
    <Button onClick={() => switchNetwork({ chainId: appChain.chainId })}>
      <Content>Swich to valid network</Content>
    </Button>
  ) : null
}
