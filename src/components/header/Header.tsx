import React, { useState } from 'react'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { ButtonLinePrimary } from '@/src/components/buttons/Button'
import { MobileMenuButton } from '@/src/components/buttons/MobileMenuButton'
import { Logo as BaseLogo } from '@/src/components/common/Logo'
import { NavLinkCSS } from '@/src/components/header/Helpers'
import { UserDropdown } from '@/src/components/header/UserDropdown'
import { ContainerPadding } from '@/src/components/helpers/ContainerPadding'
import { MainMenu } from '@/src/components/navigation/MainMenu'
import { MobileMenu } from '@/src/components/navigation/MobileMenu'
import { NavLink as BaseNavLink } from '@/src/components/navigation/NavLink'
import WrongNetwork from '@/src/components/utils/WrongNetwork'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const Wrapper = styled.header`
  align-items: center;
  background-color: none;
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

const NavLink = styled(BaseNavLink)`
  ${NavLinkCSS}
`

export const Header: React.FC = (props) => {
  const { connectWallet, isWalletConnected, isWalletNetworkSupported } = useWeb3Connection()
  const t = useTranslations('header')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
              <ButtonLinePrimary onClick={connectWallet} size="lg">
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
