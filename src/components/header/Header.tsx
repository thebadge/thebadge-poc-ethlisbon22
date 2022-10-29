import React, { useState } from 'react'
import styled from 'styled-components'

import { useAccount, useConnectModal, useNetwork } from '@web3modal/react'
import { useTranslations } from 'next-intl'

import { ButtonLinePrimary } from '@/src/components/buttons/Button'
import { MobileMenuButton } from '@/src/components/buttons/MobileMenuButton'
import { Logo as BaseLogo } from '@/src/components/common/Logo'
import { UserDropdown } from '@/src/components/header/UserDropdown'
import { ContainerPadding } from '@/src/components/helpers/ContainerPadding'
import { MainMenu } from '@/src/components/navigation/MainMenu'
import { MobileMenu } from '@/src/components/navigation/MobileMenu'
import WrongNetwork from '@/src/components/utils/WrongNetwork'

const Wrapper = styled.header`
  align-items: center;
  color: ${({ theme }) => theme.header.color};
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${({ theme }) => theme.header.height};
  position: sticky;
  top: 0;
  z-index: 10;
`

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  ${ContainerPadding}
`

const Start = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  justify-content: flex-start;
`

const Logo = styled(BaseLogo)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
    display: flex;
  }
`

const End = styled(Start)`
  column-gap: 15px;
  justify-content: flex-end;
  height: 100%;
`

const UserControls = styled.div`
  align-items: center;
  display: flex;
  height: 100%;

  > .svg {
    color: ${({ theme: { colors } }) => colors.textColor};
  }
`

export const Header: React.FC = (props) => {
  const { account } = useAccount()
  const isWalletConnected = account.isConnected
  const { network } = useNetwork()
  const isWalletNetworkSupported = !network?.chain?.unsupported || false
  const t = useTranslations('header')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { open } = useConnectModal()

  return (
    <>
      <Wrapper {...props}>
        <InnerContainer>
          <MobileMenuButton onClick={toggleMenu} />
          <Start>
            <Logo />
          </Start>
          <End>
            <WrongNetwork />
            {isWalletConnected && isWalletNetworkSupported && <MainMenu />}
            {isWalletConnected && (
              <UserControls>
                <UserDropdown />
              </UserControls>
            )}
            {!isWalletConnected && (
              <ButtonLinePrimary onClick={open} size="lg">
                {t('buttonConnect')}
              </ButtonLinePrimary>
            )}
          </End>
        </InnerContainer>
      </Wrapper>
      {isMenuOpen && <MobileMenu onClick={toggleMenu} />}
    </>
  )
}
