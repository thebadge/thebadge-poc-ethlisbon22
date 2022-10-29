import styled from 'styled-components'

import { useAccount } from '@web3modal/react'
import { useTranslations } from 'next-intl'

import { NavLink as BaseNavLink } from '@/src/components/navigation/NavLink'

const Wrapper = styled.nav`
  display: none;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.tabletLandscapeStart}) {
    align-items: center;
    display: flex;
  }
`

const NavLink = styled(BaseNavLink)`
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${({ theme: { colors } }) => colors.textColor};
  display: flex;
  font-size: 1.4rem;
  font-weight: 700;
  height: 80%;
  line-height: 1.2;
  padding: 0 10px;
  text-decoration: none;
  transition: border-color 0.15s linear, color 0.15s linear;

  &.active {
    border-bottom-color: ${({ theme: { colors } }) => colors.darkGreen};
    cursor: default;
  }

  &:not(.active):hover {
    color: ${({ theme: { colors } }) => colors.darkGreen};
  }

  &:active {
    opacity: 0.7;
  }
`

export const MainMenu: React.FC = ({ ...restProps }) => {
  const t = useTranslations('mainMenu')
  const { account } = useAccount()
  const { address } = account

  return (
    <Wrapper {...restProps}>
      <NavLink href="/">{t('home')}</NavLink>
      {address && <NavLink href={`/profile/${address}`}>{t('profile')}</NavLink>}
    </Wrapper>
  )
}
